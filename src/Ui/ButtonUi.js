import React from "react";

const ButtonUi = (props) => {
  return (
    <button className={`px-8 py-[0.58rem] rounded-3xl font-medium text-lg  border border-textBlue ${props.styles} hover:bg-blue-700 hover:text-white`}>
      {props.title}
    </button>
  );
};

export default ButtonUi;
