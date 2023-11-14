import httpStatus from "http-status";
import productModel from "../../Model/Product.js";

const createProduct = async (req, res) => {
  const { title, price, description, discountPrice, imageUrl } = req.body;
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
        discountPrice,
        imageUrl,
    });
    res.status(httpStatus.OK).json({
        
    })
  } catch (error) {}
};
