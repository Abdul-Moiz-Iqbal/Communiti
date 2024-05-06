import React from "react";

const ButtonUi = (props) => {
  return (
    <button className={`px-8 py-[0.58rem] rounded-3xl font-medium text-lg  border ${props.styles}`}>
      {props.title}
    </button>
  );
};

export default ButtonUi;
