import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    ismodalShow:any;
    modalStatus:any;
}

function CustomModel(props:Props) {
  const [show, setShow] = useState(props.ismodalShow);
  const navigate = useNavigate()
 
  const handleClose = () => {
     if(props.modalStatus){
        props.modalStatus(false);
     }
  }

  const handleLogoutConfirm = () => {
    setShow(false);
    navigate("/login")
}

  return (
    <>
      {show && (
        <div className={`modal fade ${show ? "show" : "false"} ${show ? "modal-backdrop":""}  ${show ? "modal-show":"modal-hide"}`} tab-index="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content " >
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                 <h5 className="modal-title ">Are you sure want to logout?</h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2"
                  onClick={handleLogoutConfirm}
                >
                  Yes
                </button>
                <button type="button" className="custom-cancel-btn text-dark rounded border-0 px-3 py-1"  onClick={handleClose}>
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomModel;
