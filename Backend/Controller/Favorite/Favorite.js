import httpStatus from "http-status";
import favoriteModel from "../../Model/favorite.js";

export const addToFavorite = async (req, res) => {
  const userId = req.user._id;
  const data = req.body;

  try {
    const favoriteItems = await favoriteModel
      .findOne({ user: userId, product: data.productId })
      .populate("product");
    if (favoriteItems) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "product already added to favorite list",
      });
      return;
    }

    const favoriteItem = await favoriteModel.create({
      user: userId,
      product: data.productId,
    });
    res.status(httpStatus.CREATED).json({
      status: "success",
      payload: favoriteItem,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getAllFavorite = async (req, res) => {
  const userId = req.user._id;
  try {
    const getFavorites = await favoriteModel
      .find({ user: userId })
      .populate("product");
    res.status(httpStatus.OK).json({
      status: "success",
      payload: getFavorites,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteFav = await favoriteModel.findById({ _id: id });
    if (!deleteFav) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        message: "Product does not Exist",
      });
      return;
    }

    await favoriteModel.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      message: "product Removed from Favorite List",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "error.message",
    });
  }
};
