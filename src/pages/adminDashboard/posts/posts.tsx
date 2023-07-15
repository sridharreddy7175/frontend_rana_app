import React, { useState } from "react";
import { DataTable } from "../../../components/data-table";
// import { UsersDataGridCols } from './data-grid-cols'
import { Breadcum } from "../../../components/breadcum";
import { NavLink } from "react-router-dom";
import { Search } from "../../../components/search/search";
import { FilterSearch } from "../../../components/search/filter-search";

export const PostsPage = () => {
 
  
  const handleClick=()=>{

  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
            <FilterSearch labelName="PostsList" inputTextName="Posts Name" />
        </div>
        <div className="col-6 text-end mt-3">
        <NavLink to='/dashboard/posts/form'>
              <button className="custom-bg-btn text-white border-0 px-4 py-1 me-2" onClick={()=>handleClick()}>
                Create Post
              </button>
          </NavLink>
          </div>
      </div>
      {/* <FilterSearch/> */}
      {/* <DataTable tableData={tableData} TableCols={UsersDataGridCols} /> */}
    </div>
  );
};
