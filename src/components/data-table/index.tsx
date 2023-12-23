import React, { useEffect, useState } from 'react'
import { DataTableCol } from './types';
// import { Pagination } from '../pagination';
// import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';


interface Props {
    tableData: any;
    TableCols: DataTableCol[];
    handleActiveUser:(value: any) => void;
    // searchText?: any;
    // pageNumbers?: any;
    // pageNumber: (value: any) => void;
    // activePageNumber?: number;
    // editInfo?: any;
    // deleteInfo?: any;
    // onChange?: (value: any) => void;
    // onQuestionUpload?: (value: any) => void;
}

export const DataTable: React.FC<Props> = (props: Props) => {
    const [canShowDefaultArrow, setCanShowDefaultArrow] = useState(true);
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");
    const [tabledata, setTableData] = useState('')
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;
    const items = props.tableData;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        // const data = props.tableData;
    }, [])

    const onSortingField = (data: any) => {
        setCanShowDefaultArrow(false);
        const order =
            data === sortingField && sortingOrder === "asc" ? "desc" : "asc";
        setSortingField(data);
        setSortingOrder(order);
        if (data) {
            const reversed = order === "asc" ? 1 : -1;
            const preparedData = props.tableData.sort(
                (a: any, b: any) => reversed * a[data].toString().localeCompare(b[data])
            );
            console.log(preparedData);
        }
    };

    const handlePageClick = (e: any) => {
        const newOffset = (e.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${e.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }

    const handleActiveStatus=(data:any)=>{
        if(props.handleActiveUser){
            props.handleActiveUser(data)
        }


    }

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='table-responsive'>
                            <table className='table table_new_ui'>
                                <thead className="text-center">
                                    <tr>
                                        {props.TableCols.map((el, index) => (
                                            <React.Fragment key={index}>
                                                {el.canShowColumn && <th onClick={() => el.sortable ? onSortingField(el.control) : null}>
                                                    {<span>
                                                        {el.title}
                                                    </span>}
                                                    {canShowDefaultArrow && index === 0 && el.sortable && (
                                                        <i className="bi bi-arrow-down cursor-pointer p-2 "></i>
                                                    )}
                                                    {sortingField && sortingField === el.control && (
                                                        <i className={`${sortingOrder === "asc" ? "bi bi-arrow-down cursor-pointer p-2"
                                                            : "bi bi-arrow-up cursor-pointer p-2"}`}>
                                                        </i>
                                                    )}
                                                </th>}
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {currentItems.map((data: any, i: number) => (
                                        <tr key={i}>
                                            {props.TableCols.map((el: any, index: number) => (
                                                <React.Fragment key={index}>
                                                    <td>
                                                        {data[el.control]}
                                                        {
                                                            el.isEnable && <span>
                                                                <button onClick={()=>handleActiveStatus(data)}>access</button>
                                                            </span>
                                                        }
                                                        {el.title === "Actions" && (
                                                            <div className="actions-view">
                                                                <span>
                                                                    
                                                                    {el.isEdit && <i className="bi bi-pencil-square  cursor-pointer edit-icon p-2">
                                                                    </i>}
                                                                    {el.isDelete && <i className="bi bi-trash text-danger fw-bold icon-size cursor-pointer p-2"  >
                                                                    </i>}
                                                                    {el.isView &&
                                                                        <span>
                                                                            <i className="bi bi-eye-fill cursor-pointer p-2"></i>
                                                                        </span>
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                    </td>
                                                </React.Fragment>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {
                            currentItems.length === 0 && (
                                <div className="mt-3 text-center">No records found.</div>
                            )
                        }
                        {currentItems.length > 0 &&
                            //  <Pagination totaldatacount={props.tableData.length} />
                            // <div className='pagination d-flex justify-content-end'>
                            //     <Pagination
                            //         activePage={1}
                            //         itemsCountPerPage={10}
                            //         totalItemsCount={450}
                            //         pageRangeDisplayed={5}
                            //         onChange={handlePageChange}
                            //         itemClass='page-item'
                            //     />
                            // </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <ReactPaginate
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={4}
                                    marginPagesDisplayed={0}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel=""
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
