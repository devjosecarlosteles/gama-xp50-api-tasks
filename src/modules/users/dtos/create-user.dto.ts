export class CreateUserDto {
  name: string;
  email?: string;

  constructor(data: CreateUserDto) {
    this.name = data.name;
    this.email = data.email;
  }
}
