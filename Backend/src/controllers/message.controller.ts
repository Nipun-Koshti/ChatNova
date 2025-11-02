import { Request, Response } from "express";
import {asyncHandler} from "../middlewares/asyncHandler.middlewares"
import { sendMessageSchema } from "../validators/messaage.validatore";
import { HTTPSTATUS } from "../config/http.config";
import { sendMessageService } from "../services/message.service";

export const sendMessageController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const body = sendMessageSchema.parse(req.body);

    const result = await sendMessageService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Message sent successfully",
      ...result,
    });
  }
);