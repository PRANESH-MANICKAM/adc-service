// Static imports
import { Router } from "express";
// Dynamic imports
import { successResponse } from "../helpers";

const healthCheckRoute = () => {
  const router = Router();
  router.get("/check", (req, res) => {
    successResponse(res, "ADC Server Running Successfully!");
  });
  return router;
};

export default healthCheckRoute;
