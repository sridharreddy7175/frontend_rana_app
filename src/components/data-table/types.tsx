export interface DataTableCol {
    title: string;
    control: string;
    actions?: boolean;
    sortable?: boolean;
    isEdit?: boolean;
    isDelete?: boolean;
    canShowColumn?: boolean;
    viewMore?:boolean;
    isPrivileges?:boolean;
    isView?:boolean;
    isEnable?:boolean
}