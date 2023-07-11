import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
    // inputData(formData: any): unknown;
    title: string;
    control: string;
    label: string;
    name: string;
    value: any;
    required: string;
    placeholder: string;
    formControls: any;
    userFormData: any;
    cancelRoute: any;
}

export const DymamicForm = (props: Props) => {
    const [formData, setFormData] = useState<any>({});
    const [formValues, setFormValues] = useState<any>({})
    const [isformSubmit, setIsFormSubmit] = useState<boolean>(false);
    const [errors, setErrors] = useState<any>({});
    const navigate = useNavigate()

    useEffect(() => {
        const formData: any = props.userFormData;
    }, [])

    // const handleInput = (e: any, index: number, data: any) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData: any) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    //     setFormValues(data);
    //     setErrors({});
    // }
  
    const handleInput = (e: any, index: number, data: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
          ...prevData,
          [name]: value,
        }));
      
        // Validate field based on regex pattern
        const field = props.userFormData[index];
        const { regex, label } = field;
        const newErrors: any = { ...errors };
       
        if (regex && value && !RegExp(regex).test(value)) {
          newErrors[name] = `Please enter a valid ${label.toLowerCase()}`;
        } else {
          delete newErrors[name]; // Remove the error if the input is valid
        }
      
        setErrors(newErrors);
      };

    const onClickSubmit = (e: any) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Submit form
            const clearedFormData: any = {};
            props.userFormData.forEach((field: any) => {
                clearedFormData[field.name] = "";
            });
            setFormData(clearedFormData);
            setFormData({});
            setErrors({});
        } else {
            // Display errors
        }
    };

    // const validateForm = () => {
    //     let isValid = true;
    //     const newErrors: any = {};
    //     // Validate name field
    //     if (!formData.name || !formData.name?.trim()) {
    //         newErrors.name = formValues?.error;
    //         isValid = false;
    //     }
    //     if (!formData.email || !formData.email?.trim()) {
    //         newErrors.email = formValues?.error;
    //         isValid = false;
    //     }
    //     // if(newErrors)
    //     const errorsLength = Object.keys(newErrors).length;

    //     setErrors(newErrors);
    //     return isValid;
    // };

    // const validateForm = () => {
    //     let isValid = true;
    //     const newErrors: any = {};

    //     // Validate name field
    //     if (!formData.name || !formData.name?.trim()) {
    //       newErrors.name = formValues?.error || "Please enter a name";
    //       isValid = false;
    //     }
    //     if (!formData.email || !formData.email?.trim()) {
    //       newErrors.email = formValues?.error || "Please enter an email";
    //       isValid = false;
    //     }

    //     setErrors(newErrors);
    //     return isValid;
    //   };


    // const validateForm = () => {
    //     let isValid = true;
    //     const newErrors: any = {};

    //     props.userFormData.forEach((field: any) => {
    //         const { name, label, error } = field;
    //         if (!formData[name] || !formData[name]?.trim()) {
    //             newErrors[name] = error || `Please enter a ${label.toLowerCase()}`;
    //             isValid = false;
    //         }
    //     });

    //     setErrors(newErrors);
    //     return isValid;
    // };

    // const validateForm = () => {
    //     let isValid = true;
    //     const newErrors: any = {};

    //     props.userFormData.forEach((field: any) => {
    //       const { name, label, required, regex, error } = field;
    //       const value = formData[name]?.trim();

    //       if (required && (!value || value === "")) {
    //         newErrors[name] = error || `Please enter a ${label.toLowerCase()}`;
    //         isValid = false;
    //       }

    //       if (regex && value && !RegExp(regex).test(value)) {
    //         newErrors[name] = error || `Please enter a valid ${label.toLowerCase()}`;
    //         isValid = false;
    //       }
    //     });

    //     setErrors(newErrors);
    //     return isValid;
    //   };
    const validateForm = () => {
        let isValid = true;
        const newErrors: any = {};

        props.userFormData.forEach((field: any) => {
            const { name, label, required, regex, error } = field;
            const value = formData[name]?.trim();

            if (required && (!value || value === "")) {
                newErrors[name] = error || `Please enter a ${label.toLowerCase()}`;
                isValid = false;
            }

            if (regex && value && !RegExp(regex).test(value)) {
                newErrors[name] = error || `Please enter a valid ${label.toLowerCase()}`;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };
    // const validateForm = () => {
    //     let isValid = true;
    //     const newErrors: any = {};

    //     props.userFormData.forEach((field: any) => {
    //         const { name, label, error } = field;
    //         if (!formData[name] || !formData[name]?.trim()) {
    //             newErrors[name] = error || `Please enter a ${label.toLowerCase()}`;
    //             isValid = false;
    //         }
    //     });

    //     setErrors(newErrors);
    //     return isValid;
    // };

    const onClickCancel = () => {
        navigate(props.cancelRoute)
    }

    return (
        <div className='row'>
            {props.userFormData.map((data: any, index: number) => (
                <React.Fragment key={index}>
                    {data.title === "input" &&
                        <div className='col-md-3 my-3'>
                            <label className='form-label d-flex justify-content-start'>{data.label}
                            {data.required && <span className='text-danger fw-bold mx-2'>*</span>}
                            </label>
                            <input type={data.type} name={data.name} className='form-control' placeholder={data.placeholder} onChange={(event) => { handleInput(event, index, data) }} required={data.required} maxLength={data.maxLength} />
                            {Object.keys(errors).length > 0 && (
                                <div className='text-danger text-start'>
                                    {errors[data.name] || ""}
                                </div>
                            )}
                        </div>
                    }
                    {data.title === "dropdown" &&
                        <div className='col-md-3'>
                            <label className='form-label d-flex justify-content-start'>{data.label}</label>
                            <select name={data.name} className='form-select custom-select' placeholder={data.placeholder} onChange={(event) => { handleInput(event, index, data) }}>
                                <option value="">{data.placeholder}</option>
                                <option value="Andhra Pradesh">Andhra Pradesh </option>
                                <option value="Telangana">Telangana</option>
                            </select>
                        </div>
                    }
                </React.Fragment>
            ))}
            <div className='d-flex justify-content-end my-2'>
                <button className='custom-bg-btn rounded border-0 px-4 text-white py-1 me-2' onClick={onClickSubmit}>Submit</button>
                <button className='custom-cancel-btn rounded border-0 px-4 py-1' onClick={onClickCancel} >Cancel</button>
            </div>
        </div>
    )
}
