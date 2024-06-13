// static imports
import { Router } from "express";
// Dynamic imports
import { authenticationRoute, healthCheckRoute } from "./paths";

const Routes = () => {
  const router = Router();
  router.use("/health", healthCheckRoute());
  router.use("/authentication", authenticationRoute());
  return router;
};

export default Routes;
