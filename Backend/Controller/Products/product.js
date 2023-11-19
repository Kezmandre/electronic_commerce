import httpStatus from "http-status";
import productModel from "../../Model/Product.js";

export const createProduct = async (req, res) => {
  const { title, price, description, discountedPrice, discountedPercentage, imageUrl } = req.body;
  try {
    const titleExist = await productModel.findOne({ title: title });
    if (titleExist) {
      res.status(httpStatus.FORBIDDEN).json({
        status: "error",
        payload: "title already exist",
      });
      return;
    }
    const product = await productModel.create({
      title,
      price,
      description,
      discountedPrice,
      discountedPercentage,
      imageUrl,
    });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: product,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const allProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(httpStatus.OK).json({
      status: "success",
      payload: products,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById({ _id: id });
    if (!product) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "product not found",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      status: "success",
      payload: product,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, discountPrice, description, imageUrl,discountedPercentage,discountedPrice } = req.body;

  try {
    const product = await productModel.findById({ _id: id });
    if (!product) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "product does not exist",
      });

      return;
    }

    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: id },
      { title, price, discountPrice, description, imageUrl,discountedPercentage,discountedPrice },
      { new: true }
    );
    res.status(httpStatus.OK).json({
      status: "success",
      payload: updatedProduct,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById({ _id: id });
    if (!product) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "product not found",
      });
      return;
    }

    await productModel.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "product deleted",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};
