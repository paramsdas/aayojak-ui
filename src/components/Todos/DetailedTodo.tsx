import React from "react";
import { TodoType } from "./Todo";

const DetailedTodo: React.FC<{
  todo: TodoType;
}> = (props) => {
  return (
    <div>
      <p>{props.todo.id}</p>
    </div>
  );
};

export default DetailedTodo;
