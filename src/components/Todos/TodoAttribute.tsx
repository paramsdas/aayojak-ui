import React from "react";

const TodoAttribute: React.FC<{
  attribute_name: string;
  attribute_value: string;
}> = ({ attribute_name, attribute_value }) => {
  return (
    <div className="flex flex-col">
      <p className="text-base font-bold">{attribute_name}</p>
      <p className="text-base">{attribute_value}</p>
    </div>
  );
};

export default TodoAttribute;
