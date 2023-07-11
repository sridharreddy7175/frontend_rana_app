import React from 'react'
import { NavLink } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 col-sm-6 col-md-6 col-lg-4 mx-auto my-5 login-form'>
                    <form className="m-4">
                        <div className="">
                            <h3 className="text-center ">Register</h3>
                            <div className="mt-3">
                                <div className='mb-2'>
                                    <label className='form-label d-flex justify-content-start text-start'>Username</label>
                                    <input type="text" name="username" className="form-control mt-1" placeholder="Enter username" />
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label d-flex justify-content-start text-start'>Phone number</label>
                                    <input type="text" name="phonenumber" className="form-control mt-1" placeholder="Enter mobile number" />
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label d-flex justify-content-start text-start'>Email</label>
                                    <input type="email" name="email" className="form-control mt-1" placeholder="Enter email" />
                                </div>
                                <div className=" mt-2">
                                    <label className='form-label d-flex justify-content-start'>Password</label>
                                    <input type="password" name="password" className="form-control mt-1" placeholder="Enter password" />
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button className="custom-bg-btn border-0 py-1 text-white px-5 mt-2" >Register</button>
                            </div>
                            <div className='d-flex flex-column justify-content-center my-2 '>
                                <div><NavLink to="/" className="text-decoration-none"><span className='custom-text-color'>Login</span></NavLink> </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
