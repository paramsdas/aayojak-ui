import React from "react";
import { TodoType } from "./Types";

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
        <p className="text-2xl font-semibold">{todo.title}</p>
      </div>
      <div className="flex flex-row justify-around px-5">
        <div className="flex flex-col">
          <p className="text-sm font-bold">Id</p>
          <p className="text-sm">{todo.id}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Date created</p>
          <p className="text-sm">{todo.date_created}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Date modified</p>
          <p className="text-sm">{todo.date_modified}</p>
        </div>
      </div>
      <div className="flex flex-row justify-around px-5">
        <div className="flex flex-col">
          <p className="text-sm font-bold">Status</p>
          <p className="text-sm">{todo.completion_status ? "Open" : "Done"}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Date completed</p>
          <p className="text-sm">
            {todo.date_completed === undefined ? "-" : todo.date_completed}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row">
        <div className="flex flex-col">
          <p className="text-sm font-bold">Description</p>
          <p className="text-sm">{todo.description}</p>
        </div>
      </div>
      <div className="flex w-full flex-row-reverse">
        <button className="mx-2 border-2">b1</button>
        <button className="mx-2 border-2">b2</button>
      </div>
    </div>
  );
};

export default DetailedTodo;
