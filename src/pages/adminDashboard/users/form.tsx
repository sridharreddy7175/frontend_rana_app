import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTextBox from "../../../components/inputTextBox";
import LabelBox from "../../../components/label";
import { AdminService } from "../../../app/service/admin.service";
import { toast } from "react-toastify";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]=useState(false);

  const navigate = useNavigate();
  const handleRegister = (e: any) => {
    e.preventDefault();
    let obj = {
        name:name,
        email:email,
        phone:phone,
        role:role,
        password:password
    };
    AdminService.addUser(obj).then((res: any) => {
      setLoading(true);
      if (res?.status === "Fail") {
        toast.error(res.message);
        setLoading(false);
      } else {
        if (res) {
          toast.success(res?.message);
          navigate("/dashboard/users");
          setLoading(false);
        }
      }
    });
  };

  const handleCancel=()=>{
    navigate("/dashboard/users");
  }

  return (
    <div className="container-fluid">
      <h3 className="text-start my-2">Create User</h3>
      <div className="row">
        <div className="col-6">
          <LabelBox name="Name" />
          <InputTextBox name="Name" 
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className="col-6">
          <LabelBox name="Email" />
          <InputTextBox name="Email"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Phone" />
          <InputTextBox name="Phone" 
            onChange={(e: any) => setPhone(e.target.value)}
            value={phone}
            type="number"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Role" />
          <InputTextBox name="Role" 
            onChange={(e: any) => setRole(e.target.value)}
            value={role}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Password" />
          <InputTextBox name="Password" 
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </div>
        <div className="d-flex justify-content-start mt-4">
          <button
            className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2"
            onClick={(e) => handleRegister(e)}
          >
            Submit
          </button>
          <button className="custom-cancel-btn rounded border-0 px-4 py-1" onClick={()=>handleCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
