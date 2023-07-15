import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTextBox from "../../../components/inputTextBox";
import LabelBox from "../../../components/label";

export const MoviesForm = () => {
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
      <h3 className="text-start my-2">Create Movies</h3>
      <div className="row">
        <div className="col-6">
          <LabelBox name="Title" />
          <InputTextBox name="Title" />
        </div>
        <div className="col-6">
          <LabelBox name="StoryLine" />
          <InputTextBox name="StoryLine" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Director" />
          <InputTextBox name="Director" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Type" />
          <InputTextBox name="Type" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="ReleseDate" />
          <InputTextBox name="ReleseDate" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Genres" />
          <InputTextBox name="Genres" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Tags" />
          <InputTextBox name="Tags" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Cast" />
          <InputTextBox name="Cast" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Poster" />
          <InputTextBox name="Poster" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Trailer" />
          <InputTextBox name="Trailer" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Video" />
          <InputTextBox name="Video" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="ImbRating" />
          <InputTextBox name="ImbRating" />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Language" />
          <InputTextBox name="Language" />
        </div>
      </div>
    </div>
  );
};
