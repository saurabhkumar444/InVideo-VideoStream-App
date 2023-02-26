import React from "react";

const Button = (props) => {
  const { name, onClick = () => {}, style } = props;
  return (
    <div>
      <button
        className={`${style} px-5 py-1 bg-gray-200 rounded-full border hover:border-2`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
