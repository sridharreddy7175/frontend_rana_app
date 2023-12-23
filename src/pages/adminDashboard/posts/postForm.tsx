import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTextBox from "../../../components/inputTextBox";
import LabelBox from "../../../components/label";
import { AdminService } from "../../../app/service/admin.service";
import { toast } from "react-toastify";

export const PostsForm = () => {
  const [story, setStory] = useState("");
  const [photos, setPhotos] = useState("");
  const [share, setShare] = useState("");
  const [loading,setLoading]=useState(false);

  const navigate = useNavigate();

  const handlePhoto = (e:any) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPhotos(file);
    };

    reader.readAsDataURL(file);
  };

  const handleCancelButton = () => {
    navigate("/dashboard/posts");
  };
  const handlePosts = (e: any) => {
  e.preventDefault();
  const formData = new FormData();
    formData.append("photos", photos);
    formData.append("story", story);
    formData.append("share", share);
    AdminService.addPosts(formData).then((res: any) => {
      setLoading(true);
      if (res?.status === "Fail") {
        toast.error(res.message);
        setLoading(false);
      } else {
        if (res) {
          toast.success(res?.message);
          navigate("/dashboard/posts");
          setLoading(false);
        }
      }
    });

  };

  return (
    <div className="container-fluid mb-5">
      <h3 className="text-start my-2">Create Posts</h3>
      <div className="row">
        <div className="col-6">
          <LabelBox name="Story" />
          <InputTextBox
            name="Story"
            type="text"
            onChange={(e: any) => setStory(e.target.value)}
            value={story}
          />
        </div>
        <div className="col-6">
          <LabelBox name="Photos" />
          <InputTextBox name="Photos" type="file" 
           onChange={(e:any) => handlePhoto(e)}
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Share" />
          <InputTextBox
            name="Share"
            onChange={(e: any) => setShare(e.target.value)}
            value={share}
          />
        </div>
        <div className="d-flex justify-content-start mt-4">
          <button
            className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2"
            onClick={(e) => handlePosts(e)}
          >
            Submit
          </button>
          <button
            className="custom-cancel-btn rounded border-0 px-4 py-1"
            onClick={() => handleCancelButton()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
