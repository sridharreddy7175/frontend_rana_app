import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DymamicForm } from '../../../components/form-builder/form'
import { SubUserFormControls } from '../sub-accounts/form-controls'
import { UserFormControls } from './user-form-controls'
import {userFormData} from '../../../app/formHandle/userForm/user'

export const UserForm = () => {
    const navigate = useNavigate()
    const handleCancelButton = () => {
        navigate("/dashboard/users")
    }



  
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <h3 className='text-start my-2'>Create User</h3>
                <div className='col-12'>
                    <div>
                        <div className='row d-flex justify-content-between'>
                            <DymamicForm formControls={UserFormControls} userFormData={userFormData} cancelRoute={'/dashboard/users'}
                                title={''} control={''} label={''} name={''} value={undefined} required={''} placeholder={''} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
