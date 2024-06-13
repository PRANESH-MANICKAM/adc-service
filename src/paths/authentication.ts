// Static imports
import { Router } from "express";
// Dynamic imports
import authentication from "../domain/authentication/registration";

const authenticationRoute = () => {
  const router = Router();
  router.post("/registration", authentication.registration);
  return router;
};

export default authenticationRoute;
