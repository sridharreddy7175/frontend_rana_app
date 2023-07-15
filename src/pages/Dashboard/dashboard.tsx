import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { DashboardRoutes } from '../../Routes/dashboard';
import { SidebarPage } from '../../components/sidebar/sidebar';
import CustomModel from '../../components/modal/custom-model';


export const DashboardPage = () => {
  const [showlogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  }, [])

  const onClickLogout = () => {
    setShowLogoutModal(true);
  }

  const handleModalClosed = () => {
    setShowLogoutModal(false);
  }

  const getModalStatus = (status:any) => {
    setShowLogoutModal(false);
  }

  return (
    <div className='container-fluid'>
      <div className='row px-0'>
        <div className='col-12 px-0'>
          <nav className="navbar navbar-expand-md navbar-light custom-background-color text-white ">
            <div className="container-fluid">
              <a className="navbar-brand text-white ps-1">Admin Panel</a>
              <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-white rounded"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-block d-md-none">
                  <aside>
                    <SidebarPage />
                  </aside>
                </ul>
                <div className="d-flex justify-content-center d-block d-md-none ">
                  <button className="btn btn-outline-light" type="submit" onClick={onClickLogout}>Logout</button>
                </div>
              </div>
              <div className="d-flex d-none d-md-block">
                <button className="btn btn-outline-light" type="submit" onClick={onClickLogout}>Logout</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2 d-none d-md-block px-0'>
          <div className='text-center'>
            {/* <div className='sidebar'>
                <ul className='px-0 '>
                   <NavLink to="/dashboard/users" className='text-decoration-none text-dark' ><li className='py-2 pe-5'>Users</li></NavLink>
                   <li className='py-2 pe-5 active'>Projects</li>
                   <li className='py-2 pe-5 '>Projects</li>
                   <li className='py-2 pe-5 '>Projects</li>
                </ul>
              </div> */}
            <SidebarPage />
          </div>
        </div>
        <div className='col-md-10 content-scroll'>
          <div className='d-flex flex-column justify-content-center'>
            {/* <div className='text-center my-3'>content Page
            </div> */}
            <DashboardRoutes />
          </div>
        </div>
      </div>
      {showlogoutModal &&
        <CustomModel ismodalShow={showlogoutModal} modalStatus={getModalStatus} />
      }
      <div className='row custom-background-color fixed-bottom'>
        <div className='col-12 text-white py-1'>
          <div>Copyright © 2023 Admin Panel.</div>
        </div>
      </div>
    </div>
  )
}
