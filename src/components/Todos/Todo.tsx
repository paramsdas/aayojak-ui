import React from "react";

export type TodoType = {
  id: number;
  title: string;
  description: string;
  date_created: string;
  date_modified: string;
  date_completion: string | null;
  completion_status: boolean;
};

const Todo: React.FC<{
  todo: TodoType;
  // state setting function
  onClick: () => void;
  selectedTodoId: number;
}> = (props) => {
  let classList: string = "text-2xl font-medium";

  if (props.selectedTodoId === props.todo.id) {
    classList += "hover:bg-emerald-100";
  }

  return (
    <div
      className="m-4 mt-0 flex flex-col rounded-lg bg-emerald-50 p-4 hover:cursor-pointer hover:bg-emerald-200"
      onClick={props.onClick}
    >
      <div>
        <p className={classList}>{props.todo.title}</p>
        {props.selectedTodoId === props.todo.id ? (
          <p>this todo is selected </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Todo;
