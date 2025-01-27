import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
}

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // res.status(400).json({ message: error.message });
    next(error);
  }
};

export { signup };
