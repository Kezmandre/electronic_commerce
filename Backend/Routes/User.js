import express from "express";
import validateMiddle from "../Middleware/Validation.js";
import { userSchema } from "../Controller/UserSchema.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  userLogin,
} from "../Controller/User.js";
import { Authorized, userVerification } from "../Middleware/Auth.js";

const router = express.Router();

router.route("/").post(validateMiddle(userSchema), createUser).get(getUsers);
router
  .route("/:id")
  .get(userVerification, Authorized(["default","admin"]), getUser)
  .patch(userVerification, Authorized(["default", "admin"]), updateUser)
  .delete(userVerification,Authorized(["default","admin"]), deleteUser);
router.route("/login").post(userLogin);

export default router;
