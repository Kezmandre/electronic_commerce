import httpStatus from "http-status";
import cartModel from "../../Model/Cart.js";
import { deleteProduct } from "../Products/product.js";

export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const data = req.body;

  console.log(data, "data");

  //create cart item
  try {
    //check that product is not already in cart
    const carts = await cartModel.find({}).populate("product");
    console.log(carts, "carts");
    const isPresent = carts.findIndex(
      (item) => item.product._id == data.productId && item.userId === userId
    );
    if (isPresent !== -1) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "Product already in cart",
      });
      return;
    }
    const cartItem = await cartModel.create({
      user: userId,
      product: data.productId,
    });

    res.status(httpStatus.CREATED).json({
      status: "success",
      payload: cartItem,
    });
  } catch (error) {
    console.log("add to cart error", error);
  }
};

export const getAllCartItems = async (req, res) => {
  const userId = req.user.id;
  try {
    const carts = await cartModel.findOne({ user: userId }).populate("product");
    if (!carts) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "No product in carts",
      });
      return;
    }
    const getCarts = await cartModel.find({}).populate("product");
    res.status(httpStatus.OK).json({
      status: "success",
      payload: getCarts,
    });
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const updateCartQty = async (req, res) => {
  const userId = req.user.id;
  const quantity = req.body.quantity;
  const { id } = req.params;
  console.log(req.body, req.params, "body");

  try {
    if (quantity <= 0) {
      console.log("here");
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        payload: "Quantity must be greater than 0",
      });
      return;
    }
    const updateCart = await cartModel
      .findOneAndUpdate(
        { _id: id },
        { quantity: quantity },
        {
          new: true,
        }
      )
      .populate("product");
    res.status(httpStatus.OK).json({
      status: "success",
      updateCart,
    });
    console.log(updateCart, "update");
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const removeCartProduct = async (req, res) => {
  const { id } = req.params;
  //   const userId = req.user.id;

  console.log(req.params, "idddd");
  try {
    const deleteProduct = await cartModel.findById({ _id: id });
    if (!deleteProduct) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "product not found",
      });
      return;
    }
    await cartModel.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "product removed from cart",
    });
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      payload: error.message,
    });
  }
};
