import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const onClickLogin = () => {
        // navigate("/dashboard")
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 col-sm-6 col-md-6 col-lg-4 mx-auto my-5 login-form'>
                    <form className="m-4">
                        <div className="Login-form-content">
                            <h3 className="Login-form-title text-center">Forgot Password</h3>
                            <div className="mt-3">
                                <label className='form-label d-flex justify-content-start text-start'>Password</label>
                                <input type="email" name="email" className="form-control mt-1" placeholder="Enter password" />
                                <div className=" mt-3">
                                    <label className='form-label d-flex justify-content-start'>New Password</label>
                                    <input type="password" name="password" className="form-control mt-1" placeholder="Enter new password" />
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button className="custom-bg-btn border-0 py-1 text-white px-5 mt-2" >Reset Password</button>
                            </div>
                            <div className='d-flex flex-column justify-content-center my-2'>
                            <div><NavLink to="/" className="text-decoration-none"><span className='custom-text-color' onClick={onClickLogin}>Login</span></NavLink> </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
