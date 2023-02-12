import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button
        className="px-5 py-1 m-1 bg-gray-200 rounded-full"
        onClick={() => console.log(">>>", name)}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
