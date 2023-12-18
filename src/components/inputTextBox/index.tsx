import React from "react";

const InputTextBox = (props: any) => {
  // console.log("props==>",props)
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className="form-control mt-1"
        placeholder={`Enter ${props.name}`}
        onChange={props.onChange}      />
    </div>
  );
};

export default InputTextBox;