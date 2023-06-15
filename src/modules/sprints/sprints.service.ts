import { CreateSprintDto } from "./dtos/create-sprint.dto";
import { SprintsRepository } from "./sprints.repository";

export class SprintsService {
  async create(sprint: CreateSprintDto) {
    const repository = new SprintsRepository();

    return await repository.create(sprint);
  }
}
