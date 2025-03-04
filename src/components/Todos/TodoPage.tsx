const todos: TodoType[] = [
  {
    id: 1,
    title: "My test title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab laborum explicabo quas, inventore dignissimos perferendis quibusdam consequatur similique consequuntur, aliquid laboriosam nesciunt quod provident nemo. Minus nobis asperiores numquam!",
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completion: "DD/MM/YYYY (HH:MM:SS)",
    completion_status: true,
  },
  {
    id: 2,
    title: "My test title 2",
    description: "",
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completion: null,
    completion_status: false,
  },
];

import React from "react";
import Todo, { TodoType } from "./Todo";

function TodoPage() {
  const [selectedTodoId, setSelectedTodo] = React.useState<number>(-1);

  function handleOnTodoClick(todoId: number) {
    console.log("onclick event triggered, selecting todo ", todoId);
    setSelectedTodo(todoId);
  }

  const todos_dom = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <Todo
          todo={todo}
          onClick={() => handleOnTodoClick(todo.id)}
          selectedTodoId={selectedTodoId}
        ></Todo>
      </div>
    );
  }, selectedTodoId);

  return (
    <div className="mx-8 flex h-10/12 px-8">
      <div className="h-full w-full flex-col rounded-lg bg-emerald-900 p-8">
        <div id="heading" className="flex">
          <p className="p-5 text-4xl font-semibold text-emerald-200">Todos</p>
        </div>
        <div id="todo_list">{todos_dom}</div>
      </div>
    </div>
  );
}

export default TodoPage;
