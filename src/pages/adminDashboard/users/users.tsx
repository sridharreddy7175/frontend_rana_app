import React, { useEffect, useState } from "react";
import { DataTable } from "../../../components/data-table";
import { UsersDataGridCols } from "./data-grid-cols";
import { Breadcum } from "../../../components/breadcum";
import { NavLink } from "react-router-dom";
import { Search } from "../../../components/search/search";
import { FilterSearch } from "../../../components/search/filter-search";
import {AdminService} from '../../../app/service/admin.service'
import { toast } from "react-toastify";

export const UsersPage = () => {
  const [breadcumInfo, setBreadcumInfo] = useState<any>([
    {
      label: "Users",
      value: "Users",
      routerLink: "/dashboard/users",
      isActive: false,
    },
    {
      label: "User Name",
      value: "",
      routerLink: "",
      isActive: false,
    },
  ]);
  const [usersData,setUserData]=useState([])

  useEffect(()=>{
    getUsers()
  },[])
  const getUsers=()=>{
    AdminService.getAllUserDetails().then((res:any)=>{
      if(res.status==="success"){
        setUserData(res.data)
      }
      else{
        toast.error(res.message);
      }
    })
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <FilterSearch labelName="Users List" inputTextName="User Name" />
        </div>
        <div className="col-6 text-end mt-3">
          <NavLink to="/dashboard/users/form">
            <button className="custom-bg-btn text-white border-0 px-4 py-1 me-2">
              Create User
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-5">
        <DataTable tableData={usersData} TableCols={UsersDataGridCols} />
      </div>
    </div>
  );
};
