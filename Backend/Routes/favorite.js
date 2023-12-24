import express from "express";
import validateMiddle from "../Middleware/Validation.js";
import { addToFavoriteSchema } from "../Controller/Favorite/FavoriteSchema.js";
import { userVerification } from "../Middleware/Auth.js";
import {
  addToFavorite,
  deleteFavorite,
  getAllFavorite,
} from "../Controller/Favorite/Favorite.js";

const favoriteRoute = express.Router();

favoriteRoute
  .route("/")
  .post(validateMiddle(addToFavoriteSchema), userVerification, addToFavorite)
  .get(userVerification, getAllFavorite);

  favoriteRoute.route("/:id").delete(userVerification,deleteFavorite)

export default favoriteRoute;
