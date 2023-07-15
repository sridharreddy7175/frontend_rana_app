import React, { useState } from "react";
import { DataTable } from "../../../components/data-table";
import { UsersDataGridCols } from "./data-grid-cols";
import { Breadcum } from "../../../components/breadcum";
import { NavLink } from "react-router-dom";
import { Search } from "../../../components/search/search";
import { FilterSearch } from "../../../components/search/filter-search";

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

  const tableData: any = [
    {
      user_name: "admin",
      user_email: "admin@gmail.com",
      phone_number: "9534934349",
    },
    {
      user_name: "test",
      user_email: "test@gmail.com",
      phone_number: "9534934349",
    },
    {
      user_name: "user 1",
      user_email: "user@gmail.com",
      phone_number: "9534934449",
    },
    ,
    {
      user_name: "user 2",
      user_email: "user@gmail.com",
      phone_number: "9534964349",
    },
    {
      user_name: "user 3",
      user_email: "user@gmail.com",
      phone_number: "95349343469",
    },
    {
      user_name: "user 4",
      user_email: "user@gmail.com",
      phone_number: "9534976349",
    },
    {
      user_name: "user 5",
      user_email: "user@gmail.com",
      phone_number: "9534934349",
    },
  ];

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
        <DataTable tableData={tableData} TableCols={UsersDataGridCols} />
      </div>
    </div>
  );
};
