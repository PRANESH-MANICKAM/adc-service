// Static imports
import { Request, Response } from "express";
// Dynamic imports
import { getUser } from "../user/getUser";
import { dynamicResponse, errorResponse, successResponse } from "../../helpers";
import { comparePassword, createJWT, makeRegistration } from "./helper";

class authentication {
  async registration(req: Request, res: Response): Promise<any> {
    try {
      const { body } = req;
      const { phone_number } = body;
      const [isExistingUser] = await getUser(phone_number);
      if (isExistingUser?.phone_number) {
        dynamicResponse(res, 200, {
          type: "failure",
          message: "User already exists with this phone number.",
        });
        return;
      }
      await makeRegistration(body);
      successResponse(res, "User added successfully.");
    } catch (error) {
      errorResponse(res, error.message);
    }
  }

  async login(req: Request, res: Response): Promise<any> {
    try {
      const { body } = req;
      const { phone_number } = body;
      const [userDetail] = await getUser(phone_number);
      if (!userDetail) {
        dynamicResponse(res, 200, {
          type: false,
          message: "User not exists.",
        });
        return;
      }
      const isVerified = await comparePassword(body);
      if (!isVerified) {
        dynamicResponse(res, 200, {
          type: false,
          message: "Login failed.",
        });
        return;
      }
      const token = createJWT(userDetail);
      successResponse(res, {
        user: userDetail,
        token
      });
    } catch (error) {
      errorResponse(res, error.message);
    }
  }
}

const instance = new authentication();

export default instance;
