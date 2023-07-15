import React from "react";
import LabelBox from "../label";
import InputTextBox from "../inputTextBox";

export const FilterSearch = (props:any) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mt-3">
        <LabelBox name={props.labelName}/>
        <InputTextBox name={props.inputTextName}/>
        </div>
        <div className="col-md-6 mt-5">
          <div className="d-flex justify-content-start">
            <button className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2">
              Search
            </button>
            <button className="custom-cancel-btn rounded border-0 px-4 py-1">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};