import React, { useEffect, useState } from 'react'
import { DymamicForm } from '../../../components/form-builder/form'
import { SubUserFormControls } from './form-controls'
import { useNavigate } from 'react-router-dom'

interface Props{

}

export const SubUserForm = (props:Props) => {
    const navigate = useNavigate();
    const [formInputData, setFormInputData] = useState<any>();
    const [isFormSubmit, setIsFormSubmit] = useState<boolean>(false);

    const userFormData = [
        {
            title: "input",
            control: "",
            type: "text",
            label: "name",
            name: "name",
            value: "",
            required: "1",
            placeholder: "Please eneter user name",
            error:"Pease enter valid user name"
        },
        {
            title: "input",
            control: "",
            type: "email",
            label: "User email",
            name: "user_email",
            value: "",
            required: "1",
            placeholder: "Please enter user email",
            error:"Pease enter valid user email"
        },
        {
            title: "input",
            control: "",
            type: "number",
            label: "Phone Number",
            name: "phone_number",
            value: "",
            required: "1",
            placeholder: "Please enter phone number",
            error:"Pease enter valid phone number"
        },
        {
            title: "input",
            control: "",
            type: "text",
            label: "city",
            name: "city",
            value: "",
            required: "1",
            placeholder: "Please enter the city",
            error:"Pease enter valid city"
        },
        {
            title: "dropdown",
            control: "",
            type: "text",
            label: "Select State",
            name: "state",
            value: "",
            required: "1",
            placeholder: "Please select state",
            error:"Pease enter valid city"
        }
    ]

    useEffect(() => {
        console.log("before submit button clicked Sub user form :", formInputData, isFormSubmit);
    }, [])
    

    const handleSubmit = () => {
        setIsFormSubmit(false);
        console.log("submit button Clicked in Sub user form ", formInputData, isFormSubmit);
        
    }

    const onClickCancel = () => {
       navigate('/dashboard/sub-accounts');
    }

    const forminputData = (data:any) => {
        console.log("form input data in sub user form ", data);
        setFormInputData(data);
    }

    return (
        <div className='conatiner-fluid'>
            <div className='row'>
                <div className='col-12 text-start my-2'>
                    <h3>Create Sub User</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <DymamicForm formControls={SubUserFormControls} userFormData={userFormData} title={''} control={''} label={''} name={''} value={undefined} required={''} placeholder={''} 
                     cancelRoute={"/dashboard/sub-accounts"}/>
                    
                </div>
            </div>
        </div>
    )
}
