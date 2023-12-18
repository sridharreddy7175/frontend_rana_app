import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LabelBox from "../../components/label";
import InputTextBox from "../../components/inputTextBox";
import { UsersService } from "../../app/service/users.service";
import { toast } from "react-toastify";


export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onClickLogin = (e:any) => {
    e.preventDefault();
    let obj = {
        email:email,
        password:password
    };
    UsersService.loginUser(obj).then((res: any) => {
    console.log("res==>",res?.data?.accountType)
      setLoading(true);
      if (res?.status === "Fail") {
        toast.error(res.message);
        setLoading(false);
      } else {
        sessionStorage.setItem("token", res?.data?.token);
        sessionStorage.setItem("loginData", JSON.stringify(res));
        if (res?.data?.accountType==="user") {
          toast.success(res?.message);
          navigate("/dashboard/users");
          setLoading(false);
        }
       else if (res?.data?.accountType==="admin") {
            toast.success(res?.message);
            navigate("/dashboard/users");
            setLoading(false);
          }
        
      }
    });
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-10 col-sm-6 col-md-6 col-lg-4 mx-auto my-5 login-form">
          <div className="d-flex flex-column justify-content-center my-auto">
            <form className="m-4">
              <div className="Login-form-content">
                <h3 className="Login-form-title text-center">Log In</h3>
                <div className="mt-3">
                <LabelBox name="Email" />
                  <InputTextBox
                    name="email"
                    type="email"
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className=" mt-3">
                  <LabelBox name="Password" />
                  <InputTextBox
                    name="password"
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                  />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button
                    className="custom-bg-btn border-0 py-1 text-white px-5 mt-2"
                    onClick={(e)=>onClickLogin(e)}
                  >
                    Login
                  </button>
                </div>
                <div className="d-flex flex-column justify-content-center ">
                  <div className="my-2">
                    <NavLink
                      to="/forgot-password"
                      className="text-decoration-none text-dark"
                    >
                      Forgot password
                    </NavLink>
                  </div>
                  <div>
                    Don't have an account?{" "}
                    <NavLink to="/register" className="text-decoration-none">
                      <span className="custom-text-color">Register</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
