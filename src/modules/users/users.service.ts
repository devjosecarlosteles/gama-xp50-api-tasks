import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersRepository } from "./users.repository";

export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const repository = new UsersRepository();

    return await repository.create(createUserDto);
  }
}
