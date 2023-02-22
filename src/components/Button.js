import React from "react";

const Button = (props) => {
  const { name, onClick = () => {}, style } = props;
  return (
    <div>
      <button
        className={`${style} px-5 py-1 m-1 bg-gray-200 rounded-full`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
