// static imports
import { Router } from "express";
// Dynamic imports
import { healthCheckRoute } from "./paths";

const Routes = () => {
  const router = Router();
  router.use("/health", healthCheckRoute());
  return router;
};

export default Routes;
