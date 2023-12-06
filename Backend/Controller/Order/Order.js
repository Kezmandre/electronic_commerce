import httpStatus from "http-status";
import Order from "../../Model/Order.js";

export const CreateOrder = async (req, res) => {
  const { userId, address, totalPrice, items, phoneNumber } = req.body;

  //   const totalPrice = items?.reduce((total, item) => {
  //     return total + (item.quantity || 1) * (item.product?.price || 0);
  //   }, 0);
  try {
    if (!Array.isArray(items) || items.length === 0) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "Items array is required and should not be empty.",
      });
      return;
    }
    const order = await Order.create({
      userId: userId,
      address: address,
      totalPrice: totalPrice,
      phoneNumber: phoneNumber,
      items: items,
    });

    res.status(httpStatus.CREATED).json({
      status: "success",
      payload: order,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate({
      path: "items.product",
      model: "Product",
    });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: orders,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getOrder = async (req, res) => {
  const orderId = req.params.id;
  const { items } = req.body;

  try {
    const order = await Order.findById({ _id: orderId }).populate({
      path: "items.product",
      model: "Product",
    });
    if (!order) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "Order does not Exist",
      });
      return;
    }
    if (!Array.isArray(order.items)) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: "Order must be an Array" });
    }
    const totalItems = order.items.reduce((total, item) => {
      return total + item.quantity * (item.product.price || 0);
    }, 0);
    order.totalPrice = totalItems;
    res.status(httpStatus.OK).json({
      status: "success",
      payload: order,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const data = req.body;
  const order = await Order.findById({ _id: orderId });

  try {
    if (!order) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "Order not Found",
      });
      return;
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      { _id: id },
      { data: data },
      { new: true }
    );
    res.status(httpStatus.OK).json({
      status: "success",
      payload: updatedOrder,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};


export const deleteOrder=async(req, res)=>{
  const orderId = req.params.id;
  try {
    const order = await Order.findById({_id:orderId})
    if(!order){
      res.status(httpStatus.NOT_FOUND).json({
        status:"error",
        payload:'Order Not found'
      })
      return
    }

    await Order.findByIdAndDelete({_id:orderId})
    res.status(httpStatus.OK).json({
      status:"success",
      payload:`Deleted the order with ID ${orderId}`
    })
    
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
}