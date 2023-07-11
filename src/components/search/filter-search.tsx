import React from 'react'

export const FilterSearch = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row my-2'>
                        <div className='col-md-3 my-2 my-md-0'>
                            <label className='d-flex justify-content-start'>User name</label>
                            <input type="text" className='form-control' placeholder='Enter user name' />
                        </div>
                        <div className='col-md-3 my-2 my-md-0'>
                            <label className='d-flex justify-content-start'>User email</label>
                            <input type="text" className='form-control' placeholder='Enter user email' />
                        </div>
                        <div className='col-md-3 my-2 my-md-0'>
                            <label className='d-flex justify-content-start'>Phone number</label>
                            <input type="text" className='form-control' placeholder='Enter phone number' />
                        </div>
                        <div className='col-md-3 my-2 my-md-0'>
                            <label className='d-flex justify-content-start'>From</label>
                            <input type="date" className='form-control' />
                        </div>
                        <div className='col-md-3 my-md-2'>
                            <label className='d-flex justify-content-start'>To</label>
                            <input type="date" className='form-control' />
                        </div>
                        <div className='col-md-3 '>
                            <div className='d-flex justify-content-start mt-4 pt-2'>
                                <button className='custom-bg-btn rounded border-0 px-4 text-white py-1 me-2'>Search</button>
                                <button className='custom-cancel-btn rounded border-0 px-4 py-1'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
