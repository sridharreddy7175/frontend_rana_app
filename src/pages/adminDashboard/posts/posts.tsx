import React, { useState, useEffect } from "react";
import { DataTable } from "../../../components/data-table";
// import { UsersDataGridCols } from './data-grid-cols'
import { PostsDataGridCols } from "./data-grid-cols";
import { Breadcum } from "../../../components/breadcum";
import { NavLink } from "react-router-dom";
import { Search } from "../../../components/search/search";
import { FilterSearch } from "../../../components/search/filter-search";
import { AdminService } from "../../../app/service/admin.service";
import { toast } from "react-toastify";
import LabelBox from "../../../components/label";
import InputTextBox from "../../../components/inputTextBox";

export const PostsPage = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    const data = {
      search: "",
      start: 1,
      count: 10,
    };
    AdminService.getAllPosts(data).then((res: any) => {
      console.log("resppp", res);
      if (res.status === "success") {
        setPostsData(res.data);
      } else {
        toast.error(res.message);
      }
    });
  };

  const handleSearch = () => {
    const data = {
      search: name,
      limit: 10,
      pageno: 1,
    };
    AdminService.getAllUserDetails(data).then((res: any) => {
      if (res.status === "success") {
        setPostsData(res?.data);
      } else {
        toast.error(res.message);
      }
    });
  };

  const handleCancel = () => {
    setName("");
  };

  return (
    <div className="container-fluid">
       <div className="row">
        <div className="col-6">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mt-3">
                <LabelBox name="Posts List" />
                <InputTextBox
                  name="Posts Name"
                  onChange={(e: any) => setName(e.target.value)}
                  // value={name}
                />
              </div>
              <div className="col-md-6 mt-5">
                <div className="d-flex justify-content-start">
                  <button
                    className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2"
                    onClick={() => handleSearch()}
                  >
                    Search
                  </button>
                  <button className="custom-cancel-btn rounded border-0 px-4 py-1" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 text-end mt-3">
          <NavLink to="/dashboard/posts/form">
            <button className="custom-bg-btn text-white border-0 px-4 py-1 me-2">
              Create Post
            </button>
          </NavLink>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          tableData={postsData}
          TableCols={PostsDataGridCols}
          handleActiveUser={() => { }}
        />
      </div>
    </div>
  );
};
