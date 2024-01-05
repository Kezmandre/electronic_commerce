import httpStatus from "http-status";
import { serialize } from "../../Utility/serialize.js";
import { uniqueCode } from "../../Utility/uniqueCode.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../../Utility/jwt-token.js";
import userModel from "../../Model/User.js";
import cartModel from "../../Model/Cart.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      res.status(httpStatus.CONFLICT).json({
        status: "error",
        payload: "User with the email already exist",
      });
      return;
    }
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      userCode: uniqueCode(7),
    });

    res.status(httpStatus.OK).json({
      status: "success",
      payload: serialize(user),
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email: email });
    if (!userExist) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        message: "user not found, create account",
      });
      return;
    }

    const decodePassword = await bcryptjs.compare(password, userExist.password);
    if (!decodePassword) {
      res.status(httpStatus.FORBIDDEN).json({
        status: "error",
        payload: "credentials does not match",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      status: "success",
      payload: serialize(userExist),
      token: generateToken(userExist._id, userExist.email),
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(httpStatus.OK).json({
      status: "success",
      payload: users,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById({ _id: id });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: error,
        payload: "User not found",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      status: "success",
      payload: user,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password, name } = req.body;

  try {
    const user = await userModel.findById({ _id: id });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: error,
        payload: "User not found",
      });
      return;
    }
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: id },
      { password, name },
      { new: true }
    );
    res.status(httpStatus.OK).json({
      status: "success",
      payload: serialize(updatedUser),
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById({ _id: id });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "User not found",
      });
      return;
    }

    await userModel.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "User deleted",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};
