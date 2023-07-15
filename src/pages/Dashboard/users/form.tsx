import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTextBox from "../../../components/inputTextBox";
import LabelBox from "../../../components/label";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate("/dashboard/users");
  };

  return (
    <div className="container-fluid">
      <h3 className="text-start my-2">Create User</h3>
      <div className="row">
        <div className="col-6">
          <LabelBox name="Name" />
          <InputTextBox name="Name" />
        </div>
        <div className="col-6">
          <LabelBox name="Email" />
          <InputTextBox name="Email" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Phone" />
          <InputTextBox name="Phone" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Password" />
          <InputTextBox name="Password" />
        </div>
        <div className="d-flex justify-content-start mt-4">
          <button className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2">
            Submit
          </button>
          <button className="custom-cancel-btn rounded border-0 px-4 py-1">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
