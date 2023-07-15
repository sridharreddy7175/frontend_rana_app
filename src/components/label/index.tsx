import React from "react";

const LabelBox = (props:any) => {
  return (
    <div>
      <label className="form-label d-flex justify-content-start text-start">
        {props.name}
      </label>
    </div>
  );
};

export default LabelBox;
