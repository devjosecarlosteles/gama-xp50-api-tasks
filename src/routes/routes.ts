import { Router } from "express";
import sprintsController from "../modules/sprints/sprints.controller";
import usersController from "../modules/users/users.controller";

const router = Router();

router.post("/sprints", sprintsController.create);

router.post("/users", usersController.create);

export default router;
