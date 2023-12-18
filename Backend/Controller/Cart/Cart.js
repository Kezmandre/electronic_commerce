import httpStatus from "http-status";
import cartModel from "../../Model/Cart.js";
import { deleteProduct } from "../Products/product.js";

export const addToCart = async (req, res) => {
  const userId = req.user._id;
  console.log(req.user, "req");
  const data = req.body;

  console.log(data, "data");

  //create cart item
  try {
    // //check that product is not already in cart
    // const carts = await cartModel.find({user:userId}).populate("product");
    // console.log(carts, "carts");
    // const isPresent = carts.findIndex(
    //   (item) =>
    //     (item.product && item.product._id == data.productId) ||
    //     item.userId === userId
    // );
    // if (isPresent !== -1) {
    //   res.status(httpStatus.BAD_REQUEST).json({
    //     status: "error",
    //     message: "Product already in cart",
    //   });
    //   return;
    // }

    const cartItems = await cartModel
      .findOne({ user: userId, product: data.productId })
      .populate("product");
    if (cartItems) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "Product Already In cart",
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
    console.log(error, "err");
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getAllCartItems = async (req, res) => {
  const userId = req.user.id;
  try {
    const getCarts = await cartModel.find({ user: userId }).populate("product");
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
  const {type} = req.body
  console.log(req.body, req.params, "body");

  try {
    const cart = await cartModel.findById(id);
    if (!cart) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        message: "No Cart Item Found",
      });
      return;
    }

    let newQuantity;
    if (type === "increase") {
      newQuantity = cart.quantity + 1;
    }else if(type === "decrease"){
      newQuantity = cart.quantity - 1
    }
    if (newQuantity <= 0) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        payload: "Quantity must be greater than 0",
      });
      return;
    }else{
      res.status(httpStatus.BAD_REQUEST).json({
        status:"error",
        message:"invalid parameter"
      })
    }
    const updateCart = await cartModel
      .findOneAndUpdate(
        { _id: id },
        { quantity: newQuantity },
        {
          new: true,
        }
      )
    res.status(httpStatus.OK).json({
      status: "success",
      updateCart,
    });
    console.log(updateCart, "update");
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      message: error.message,
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
