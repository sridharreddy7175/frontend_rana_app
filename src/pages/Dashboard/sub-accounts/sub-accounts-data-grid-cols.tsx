import { DataTableCol } from "../../../components/data-table/types";

export const SubUsersDataGridCols: DataTableCol[] = [
    {
        title: 'Sub User Name',
        control: 'sub_user_name',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'Sub User Email',
        control: 'sub_user_email',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'Phone Number',
        control: 'sub_user_phone_number',
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