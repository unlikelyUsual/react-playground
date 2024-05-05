import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/enviroment";
import UserModel from "../models/User.model";
import { BaseController } from "./base.controller";

export class UserController extends BaseController {
  constructor() {
    super();
  }

  login = this.tryCatchFn(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email }).select(
      "+email +password"
    );

    if (!user) {
      return res.status(400).json({ message: "Email is incorrect" });
    }

    const isSame = bcrypt.compare(password, user.password);

    if (!isSame) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      config.JWT.KEY,
      { expiresIn: "1 day" }
    );

    return res.json({
      message: "Logged In",
      payload: {
        user,
        token,
      },
    });
  });

  register = this.tryCatchFn(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password, name, phone, dob } = req.body;

      const user = await UserModel.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "Email is already exist" });
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const saveRes = await new UserModel({
        name,
        email,
        password: hash,
        dob,
        phone,
      });

      console.log(`Save res`, saveRes);

      return res.json({ message: "Registered Successfully" });
    }
  );
}
