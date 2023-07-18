export interface ITask {
  text: string;
  completed: boolean;
  id: number;
  dueDate: Date | null;
}
