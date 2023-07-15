import React from "react";

const InputTextBox = (props: any) => {
  return (
    <div>
      <input
        type={props.name}
        name={props.name}
        className="form-control mt-1"
        placeholder={`Enter ${props.name}`}
      />
    </div>
  );
};

export default InputTextBox;
