import { DataTableCol } from "../../../components/data-table/types";

export const UsersDataGridCols: DataTableCol[] = [
    {
        title: 'User Name',
        control: 'name',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'User Email',
        control: 'email',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'Phone Number',
        control: 'phone',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'active User',
        control: 'activeStatus',
        sortable: false,
        canShowColumn: true,
        isEnable:true
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