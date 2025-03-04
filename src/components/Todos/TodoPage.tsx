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
      <div className="flex h-full w-full flex-col rounded-lg bg-emerald-900 p-8 pb-12">
        <div id="heading" className="flex w-full flex-row justify-center">
          <p className="p-4 text-4xl font-semibold text-emerald-200">Todos</p>
        </div>
        <div className="flex h-full flex-row p-4">
          <div className="flex flex-col" style={{ width: "50%" }}>
            <div id="todo_list">{todos_dom}</div>
          </div>
          <div
            className="flex h-full flex-col rounded-lg bg-emerald-200"
            style={{ width: "50%" }}
          >
            <div className="flex h-full w-full flex-row items-center justify-center">
              <DetailedTodo todo={selectedTodo}></DetailedTodo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
