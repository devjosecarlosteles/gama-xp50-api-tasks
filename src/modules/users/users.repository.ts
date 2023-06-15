import { PrismaService } from "../../services/prisma/prisma.service";
import { CreateUserDto } from "./dtos/create-user.dto";

const prismaService = PrismaService;

export class UsersRepository {
  async create(createUserDto: CreateUserDto) {
    return await prismaService.users.create({
      data: {
        ...createUserDto,
      },
    });
  }
}
