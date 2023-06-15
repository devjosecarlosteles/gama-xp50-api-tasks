export class CreateTaskDto {
  title: string;
  endData: string;
  priority: string;
  sprintPoint: number;
  userId: string;
  sprintId: string;

  constructor(data: CreateTaskDto) {
    this.title = data.title;
    this.endData = data.endData;
    this.priority = data.priority;
    this.sprintId = data.sprintId;
    this.sprintPoint = data.sprintPoint;
    this.userId = data.userId;
  }
}
