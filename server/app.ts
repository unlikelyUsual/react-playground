import "dotenv/config";
import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import { config } from "./config/enviroment";
import UserRouter from "./routes/user.route";

const app: Application = express();

const db = new Database(config.MONGO.USER, config.MONGO.PASSWORD, "playground");
db.connect();

app.use(express.json());
app.use(UserRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "All well and done!" });
});

export default app;
