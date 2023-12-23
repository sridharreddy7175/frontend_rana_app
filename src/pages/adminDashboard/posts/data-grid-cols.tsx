import { DataTableCol } from "../../../components/data-table/types";

export const PostsDataGridCols: DataTableCol[] = [
    {
        title: 'Story Name',
        control: 'story',
        sortable: true,
        canShowColumn: true
    },
    {
        title: 'User Images',
        control: 'photos',
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