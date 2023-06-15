export class CreateSprintDto {
  name: string;
  startDate: string;
  endDate: string;

  constructor(data: CreateSprintDto) {
    this.name = data.name;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
  }
}
