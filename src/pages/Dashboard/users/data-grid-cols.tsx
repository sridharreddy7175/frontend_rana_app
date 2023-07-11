import { DataTableCol } from "../../../components/data-table/types";

export const UsersDataGridCols: DataTableCol[] = [
    {
        title: 'User Name',
        control: 'user_name',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'User Email',
        control: 'user_email',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'Phone Number',
        control: 'phone_number',
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