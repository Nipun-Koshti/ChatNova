import { Router } from "express";
import { loginController, registerController, LogoutController, authStatuController} from "../controllers/auth.controller";
import { passportAuthenticateJwt } from "../config/passport.config";


const authRoutes = Router()
  .post("/register", registerController)
  .post("/login", loginController)
  .post("/logout", LogoutController)
  .get("/status", passportAuthenticateJwt, authStatuController);

export default authRoutes;