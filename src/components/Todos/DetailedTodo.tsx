import React from "react";
import { TodoType } from "./Types";
import TodoAttribute from "./TodoAttribute";

const DetailedTodo: React.FC<{
  todo: TodoType | undefined;
}> = ({ todo }) => {
  if (todo === undefined) {
    return (
      <div>
        <p>Please select a todo</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col space-y-4 p-4">
      <div className="flex flex-row">
        <p className="text-3xl font-semibold">{todo.title}</p>
      </div>
      <div
        className="flex flex-col overflow-scroll"
        style={{ maxHeight: "50%" }}
      >
        <div className="flex flex-row justify-around px-5">
          <TodoAttribute
            attribute_name="Id"
            attribute_value={todo.id.toString()}
          ></TodoAttribute>
          <TodoAttribute
            attribute_name="Date created"
            attribute_value={todo.date_created}
          ></TodoAttribute>
          <TodoAttribute
            attribute_name="Date modified"
            attribute_value={todo.date_modified}
          ></TodoAttribute>
        </div>
        <div className="flex flex-row justify-evenly px-5">
          <TodoAttribute
            attribute_name="Status"
            attribute_value={todo.completion_status ? "Done" : "Open"}
          ></TodoAttribute>
          <TodoAttribute
            attribute_name="Date completed"
            attribute_value={
              todo.date_completed === undefined ? "-" : todo.date_completed
            }
          ></TodoAttribute>
        </div>
        <div className="flex w-full flex-row">
          <TodoAttribute
            attribute_name="Description"
            attribute_value={
              todo.description === undefined ? "-" : todo.description
            }
          ></TodoAttribute>
        </div>
      </div>
      <div className="mt-auto flex w-full flex-row-reverse">
        <button className="mx-2 rounded-lg bg-red-900 p-2 text-sm text-white hover:cursor-pointer hover:bg-red-800">
          Delete
        </button>
        <button className="mx-2 rounded-lg bg-blue-900 p-2 text-sm text-white hover:cursor-pointer hover:bg-blue-800">
          Edit
        </button>
        <button className="mx-2 rounded-lg bg-green-900 p-2 text-sm text-white hover:cursor-pointer hover:bg-green-800">
          {todo.completion_status ? "Re-Open" : "Mark as done"}
        </button>
      </div>
    </div>
  );
};

export default DetailedTodo;
