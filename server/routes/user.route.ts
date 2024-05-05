import express from "express";
import { UserController } from "../controller/user.controller";
import { authMiddleware } from "../middleware/auth.middlewar";

const controller = new UserController();
const router = express.Router();

router.post("/login", controller.login);
router.post("/signup", controller.register);

// User JWT Authentication middleware here
router.use(authMiddleware);

router.get("/user", () => {});

export default router;
