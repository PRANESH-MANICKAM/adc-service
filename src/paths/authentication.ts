// Static imports
import { Router } from "express";
// Dynamic imports
import authentication from "../domain/authentication";

const authenticationRoute = () => {
  const router = Router();
  router.post("/registration", authentication.registration);
  router.post("/login", authentication.login);
  return router;
};

export default authenticationRoute;
