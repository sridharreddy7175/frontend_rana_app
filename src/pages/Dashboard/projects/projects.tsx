import React, { useState } from 'react'
import { DataTable } from '../../../components/data-table'
import { ProjectsDataGridCols } from './projects-data-grid-cols'
import { Breadcum } from '../../../components/breadcum';

export const ProjectsPage = () => {

    const [breadcumInfo, setBreadcumInfo] = useState<any>([
        {
          label: "Projects",
          value: "Projects",
          routerLink: "/dashboard/projects",
          isActive: false,
        },
        {
          label: "Project Name",
          value: "",
          routerLink: "",
          isActive: false,
        },
      ]);
    
    const projectsData :any = [
        {
          project_name:"test project 1",
          project_description:"interior design 1",
          amount :'10000'
        },
        {
            project_name:"test project 2",
            project_description:"interior design 2",
            amount :'30000'
        },
        {
            project_name:"test project 4",
            project_description:"interior design 4",
            amount :'20000'
        },
        {
            project_name:"test project 5",
            project_description:"interior design 5",
            amount :'20000'
        },
        {
            project_name:"test project 6",
            project_description:"interior design 6",
            amount :'20000'
        },
        {
            project_name:"test project 7",
            project_description:"interior design 7",
            amount :'20000'
        },
        {
            project_name:"test project 8",
            project_description:"interior design 8",
            amount :'20000'
        },
        {
            project_name:"test project 9",
            project_description:"interior design 9",
            amount :'20000'
        },
        {
            project_name:"test project 10",
            project_description:"interior design 10",
            amount :'20000'
        },
        {
            project_name:"test project 11",
            project_description:"interior design 11",
            amount :'20000'
        },
        {
            project_name:"test project 12",
            project_description:"interior design 12",
            amount :'20000'
        }
      ]

      const getBredcumList = () =>{
        
      }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <Breadcum breadcumList={breadcumInfo}></Breadcum>
                <DataTable tableData={projectsData} TableCols={ProjectsDataGridCols}></DataTable>
            </div>
        </div>
    </div>
  )
}
