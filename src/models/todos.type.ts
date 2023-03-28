export type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type TodoList = {
  item: TodoType;
  index: number;
};
