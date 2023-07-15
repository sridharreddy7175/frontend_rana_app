import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTextBox from "../../../components/inputTextBox";
import LabelBox from "../../../components/label";

export const ReelsForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate("/dashboard/users");
  };

  return (
    <div className="container-fluid mb-5">
      <h3 className="text-start my-2">Create Reels</h3>
      <div className="row">
        <div className="col-6">
          <LabelBox name="Story" />
          <InputTextBox name="Story" />
        </div>
        <div className="col-6">
          <LabelBox name="Photos" />
          <InputTextBox name="Photos" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Share" />
          <InputTextBox name="Share" />
        </div>
      </div>
    </div>
  );
};
