export type TodoType = {
  id: number;
  title: string;
  description: string;
  date_created: string;
  date_modified: string;
  date_completed: string | undefined;
  completion_status: boolean;
};
