import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/dashboard/users");
    }
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-10 col-sm-6 col-md-6 col-lg-4 mx-auto my-5 login-form'>
                    <div className='d-flex flex-column justify-content-center my-auto'>
                        <form className="m-4">
                            <div className="Login-form-content">
                                <h3 className="Login-form-title text-center">Log In</h3>
                                <div className="mt-3">
                                    <label className='form-label d-flex justify-content-start text-start'>Email</label>
                                    <input type="email" name="email" className="form-control mt-1" placeholder="Enter email" />
                                    <div className=" mt-3">
                                        <label className='form-label d-flex justify-content-start'>Password</label>
                                        <input type="password" name="password" className="form-control mt-1" placeholder="Enter password" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <button className="custom-bg-btn border-0 py-1 text-white px-5 mt-2" onClick={onClickLogin} >Login</button>
                                </div>
                                <div className='d-flex flex-column justify-content-center '>
                                    <div className='my-2'><NavLink to="/forgot-password" className="text-decoration-none text-dark">Forgot password</NavLink></div>
                                    <div>Don't have an account? <NavLink to="/register" className="text-decoration-none"><span className='custom-text-color'>Register</span></NavLink></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
