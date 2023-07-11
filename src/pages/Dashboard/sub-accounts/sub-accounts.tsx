import React, { useState } from 'react'
import { DataTable } from '../../../components/data-table'
import { SubUsersDataGridCols } from './sub-accounts-data-grid-cols'
import { Breadcum } from '../../../components/breadcum';
import { Search } from '../../../components/search/search';
import { NavLink } from 'react-router-dom';

export const SubAccountsPage = () => {

  const [breadcumInfo, setBreadcumInfo] = useState<any>([
    {
      label: "Sub Users",
      value: "Sub Users",
      routerLink: "/dashboard/sub-acounts",
      isActive: false,
    },
    {
      label: "Sub User Name",
      value: "",
      routerLink: "",
      isActive: false,
    },
  ]);
  const subUsersData: any = [
    {
      sub_user_name: "test sub user",
      sub_user_email: "testsubuser@gmail.com",
      sub_user_phone_number: '9534934349'
    },
    {
      sub_user_name: "test user",
      sub_user_email: "testuser@gmail.com",
      sub_user_phone_number: '8548468484'
    }, {
      sub_user_name: "user1",
      sub_user_email: "user@gmail.com",
      sub_user_phone_number: '7334646477'
    }, {
      sub_user_name: "user2",
      sub_user_email: "user@gmail.com",
      sub_user_phone_number: '7334646477'
    }, {
      sub_user_name: "user3",
      sub_user_email: "user@gmail.com",
      sub_user_phone_number: '7334646477'
    }, {
      sub_user_name: "user4",
      sub_user_email: "user@gmail.com",
      sub_user_phone_number: '7334646477'
    }, {
      sub_user_name: "user5",
      sub_user_email: "user@gmail.com",
      sub_user_phone_number: '7334646477'
    }, {
      sub_user_name: "user6",
      sub_user_email: "user@gmail.com",
      sub_user_phone_number: '7334646477'
    }
  ]
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex justify-content-between'>
            <div>
              <Breadcum breadcumList={breadcumInfo}></Breadcum>
            </div>
            <div className=' mt-2 pt-2'> 
              <NavLink to="/dashboard/sub-accounts/form"><button className='custom-bg-btn px-4 py-1 rounded border-0 text-white me-2' > Create Sub User</button></NavLink>
            </div>
          </div>
          <Search />
          <DataTable tableData={subUsersData ? subUsersData : 0} TableCols={SubUsersDataGridCols}></DataTable>
        </div>
      </div>
    </div>
  )
}
