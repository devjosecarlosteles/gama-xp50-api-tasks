import { Sprints } from "@prisma/client";
import { CreateSprintDto } from "./dtos/create-sprint.dto";
import { PrismaService } from "../../services/prisma/prisma.service";

const prismaService = PrismaService;

export class SprintsRepository {
  async create(sprint: CreateSprintDto): Promise<Sprints> {
    return await prismaService.sprints.create({
      data: {
        ...sprint,
        status: "ACTIVE",
      },
    });
  }
}
