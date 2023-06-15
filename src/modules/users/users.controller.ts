import { Request, Response } from "express";
import { UsersService } from "./users.service";

class UsersController {
  async create(req: Request, res: Response) {
    const { body } = req;

    const service = new UsersService();

    const createUser = await service.create(body);

    return res.status(201).json(createUser);
  }
}

export default new UsersController();
