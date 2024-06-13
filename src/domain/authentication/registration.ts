// Static imports
import { Request, Response } from "express";
// Dynamic imports
import { getUser } from "../user/getUser";
import { dynamicResponse, errorResponse, successResponse } from "../../helpers";
import { makeRegistration } from "./helper";

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
}

const instance = new authentication();

export default instance;
