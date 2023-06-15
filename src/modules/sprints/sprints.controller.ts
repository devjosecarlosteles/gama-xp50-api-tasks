import { Request, Response } from "express";
import { SprintsService } from "./sprints.service";

class SprintsController {
  async create(req: Request, res: Response) {
    const { body } = req;

    const service = new SprintsService();

    const createSprint = await service.create(body);

    return res.status(201).json(createSprint);
  }
}

export default new SprintsController();
