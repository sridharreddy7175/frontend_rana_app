import { DataTableCol } from "../../../components/data-table/types";

export const ProjectsDataGridCols: DataTableCol[] = [
    {
        title: 'Project Name',
        control: 'project_name',
        sortable: true,
        canShowColumn: true
        
    },
    {
        title: 'Project Description',
        control: 'project_description',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'Amount',
        control: 'amount',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'Actions',
        control: 'both',
        sortable: false,
        isEdit: true,
        isDelete: true,
        canShowColumn: true
    },
];