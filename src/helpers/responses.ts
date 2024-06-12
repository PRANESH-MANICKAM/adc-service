// Dynamic imports
import { Response } from "express";

const successResponse = (res: Response, data: any) => {
  const statusCode: number = 200;
  if (typeof data === "string") {
    res.status(statusCode).json({
      message: data,
    });
  } else {
    res.status(statusCode).json(data);
  }
};

const errorResponse = (res: Response, data: any) => {
  const statusCode: number = 500;
  res.status(statusCode).json({
    message: data,
  });
};

const dynamicResponse = (res: Response, statusCode: number, data: any) => {
  res.status(statusCode).json(data);
};

export { successResponse, errorResponse, dynamicResponse };
