const todos: TodoType[] = [
  {
    id: 1,
    title: "My test title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab laborum explicabo quas, inventore dignissimos perferendis quibusdam consequatur similique consequuntur, aliquid laboriosam nesciunt quod provident nemo. Minus nobis asperiores numquam!",
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completed: "DD/MM/YYYY (HH:MM:SS)",
    completion_status: true,
  },
  {
    id: 2,
    title: "My test title 2",
    description: undefined,
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completed: undefined,
    completion_status: false,
  },
  {
    id: 3,
    title: "My test title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab laborum explicabo quas, inventore dignissimos perferendis quibusdam consequatur similique consequuntur, aliquid laboriosam nesciunt quod provident nemo. Minus nobis asperiores numquam!",
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completed: "DD/MM/YYYY (HH:MM:SS)",
    completion_status: true,
  },
  {
    id: 4,
    title: "My test title 2",
    description: undefined,
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completed: undefined,
    completion_status: false,
  },
  {
    id: 5,
    title: "My test title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab laborum explicabo quas, inventore dignissimos perferendis quibusdam consequatur similique consequuntur, aliquid laboriosam nesciunt quod provident nemo. Minus nobis asperiores numquam!",
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completed: "DD/MM/YYYY (HH:MM:SS)",
    completion_status: true,
  },
  {
    id: 6,
    title: "My test title 2",
    description: undefined,
    date_created: "DD/MM/YYYY (HH:MM:SS)",
    date_modified: "DD/MM/YYYY (HH:MM:SS)",
    date_completed: undefined,
    completion_status: false,
  },
];

import React from "react";
import Todo from "./Todo";
import DetailedTodo from "./DetailedTodo";
import { TodoType } from "./Types";

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

  const selectedTodo: TodoType | undefined = todos.find((todo) => {
    if (todo.id === selectedTodoId) return todo;
  });

  return (
    <div className="mx-8 flex h-9/12 px-2">
      <div className="flex max-h-full w-full flex-col overflow-hidden rounded-lg bg-emerald-900 p-6 pt-0">
        <div
          id="heading"
          className="m-2 flex w-full flex-row justify-center p-2"
          style={{ maxHeight: "15%" }}
        >
          <p className="p-2 text-4xl font-semibold text-emerald-200">Todos</p>
        </div>
        <div className="flex flex-row" style={{ maxHeight: "80%" }}>
          <div
            className="flex max-h-full flex-col overflow-scroll"
            style={{ width: "50%" }}
          >
            <div id="todo_list">{todos_dom}</div>
          </div>
          <div
            className="flex max-h-full flex-col overflow-scroll"
            style={{ width: "50%" }}
          >
            <div className="flex h-full w-full flex-row items-center justify-center rounded-lg bg-emerald-200">
              <DetailedTodo todo={selectedTodo}></DetailedTodo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
