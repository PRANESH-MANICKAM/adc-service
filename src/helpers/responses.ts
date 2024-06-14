// Dynamic imports
import { Response } from "express";

export interface ReturnResponse {
  type: "success" | "failure";
  message?: any;
  data?: any;
}

const successResponse = (res: Response, data: any) => {
  const statusCode: number = 200;
  let response: ReturnResponse;
  if (typeof data === "string") {
    response = {
      type: "success",
      message: data,
    };
  }
  response = {
    type: "success",
    data,
  };
  res.status(statusCode).json(response);
};

const errorResponse = (res: Response, data: any) => {
  const statusCode: number = 500;
  const response: ReturnResponse = {
    type: "failure",
    message: data,
  };
  res.status(statusCode).json(response);
};

const dynamicResponse = (res: Response, statusCode: number, data: any) => {
  res.status(statusCode).json(data);
};

export { successResponse, errorResponse, dynamicResponse };
