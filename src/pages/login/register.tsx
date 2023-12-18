import React, { useState } from "react";
import { UsersService } from "../../app/service/users.service";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputTextBox from "../../components/inputTextBox";
import LabelBox from "../../components/label";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e:any) => {
    e.preventDefault();
    let obj = {
        name:name,
        email:email,
        phone:phone,
        password:password
    };
    UsersService.addUser(obj).then((res: any) => {
      setLoading(true);
      if (res?.status === "Fail") {
        toast.error(res.message);
        setLoading(false);
      } else {
        if (res) {
          toast.success(res?.message);
          navigate("/");
          setLoading(false);
        }
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 col-sm-6 col-md-6 col-lg-4 mx-auto my-5 login-form">
          <form className="m-4">
            <div className="">
              <h3 className="text-center ">Register</h3>
              <div className="mt-3">
                <div className="mb-2">
                  <LabelBox name="Name" />
                  <InputTextBox
                    name={name}
                    onChange={(e: any) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="mb-2">
                  <LabelBox name="Email" />
                  <InputTextBox
                    name={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-2">
                  <LabelBox name="Phone" />
                  <InputTextBox
                    name={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className=" mt-2">
                  <LabelBox name="Password" />
                  <InputTextBox
                    name={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="text-center mt-3">
                <button
                  className="custom-bg-btn border-0 py-1 text-white px-5 mt-2"
                  onClick={(e) => handleRegister(e)}
                >
                  Register
                </button>
              </div>
              <div className="d-flex flex-column justify-content-center my-2 ">
                <div>
                  <NavLink to="/" className="text-decoration-none">
                    <span className="custom-text-color">Login</span>
                  </NavLink>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
