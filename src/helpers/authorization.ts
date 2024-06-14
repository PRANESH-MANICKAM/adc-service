// Static imports
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
// Dynamic imports
import { dynamicResponse, errorResponse } from "./responses";

const authorization = (req: any, res: Response, next: any) => {
  try {
    const whiteList = [
      { method: "GET", url: `${process.env.BASE_PATH}/health/check` },
      {
        method: "POST",
        url: `${process.env.BASE_PATH}/authentication/registration`,
      },
      { method: "POST", url: `${process.env.BASE_PATH}/authentication/login` },
    ];
    const checkWhiteList = whiteList.some(
      (item) => item.method === req.method && item.url === req.path
    );
    if (checkWhiteList) {
      next();
      return;
    }
    const extractToken = req.headers["authorization"];
    const token = extractToken.split(" ")[1];
    if (!token) {
      dynamicResponse(res, 401, {
        type: false,
        message: "Authorization Failed or Token Is Undefined.",
      });
      next();
      return;
    }
    const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);
    if (!verifiedUser) {
      dynamicResponse(res, 401, {
        type: false,
        message: "User not verified.",
        token,
      });
      next();
      return;
    }
    req.userInfo = verifiedUser;
    next();
  } catch (error) {
    errorResponse(res, "Error ocurred in authorization");
  }
};

export default authorization;
