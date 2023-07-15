import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
    totaldatacount: number;
}


export const Pagination = (props: Props) => {
    const [activePage, setActivePage] = useState<any>("1");
    const [pageArray, setPageArray] = useState([])
    const pagecount = props.totaldatacount;
    const totalPage =  props.totaldatacount;
    const navigate = useNavigate()

    useEffect(() => {
        setActivePage("1")
        pagination()
    }, [])

    const pagination = () => {
        const pageNumbers = Math.ceil(pagecount / 2);
        const pageArray: any = [];
        for (let i = 1; i <= pageNumbers; i++) {
            pageArray.push(i);
        }
        setPageArray(pageArray);
    }

    function onClickNextPage() {
        setActivePage(activePage + 1);
        onClickPage(activePage + 1);
    }

    function onClickPreviousPage() {
        const previousPage = activePage - 1;
        setActivePage(activePage - 1);
        onClickPage(activePage - 1)
    }

    const onClickDoubbleArrows = (arrow: any) => {
        if (arrow === "&raquo;") {
            setActivePage(totalPage);
            onClickPage(totalPage);
        } else {
            setActivePage(1);
            onClickPage(1);
        }
    }

    const onClickPage = (number: any) => {
            setActivePage(number);
            navigate(`/dashboard/users?page=${number}`);
    }

    return (
        <div className='container-fluid'>
            <div className='row mb-5'>
                <div className='col-12'>
                    <div className='pagination-contianer '>
                        <nav className="mt-3 d-flex justify-content-end" >
                            {pageArray && (
                                <ul className="pagination justify-content-end">
                                    <li className="page-item" onClick={() => onClickDoubbleArrows("&laquo;")} ><span className={`page-link prev ${activePage == 1 ? "disabled" : ""}`} >&laquo;</span></li>
                                    <li className="page-item">
                                        <button className={`page-link prev ${activePage == 1 ? "disabled" : ""}`} onClick={onClickPreviousPage}>
                                            &lsaquo;
                                        </button>
                                    </li>
                                    {pageArray.length > 5 &&
                                        pageArray.map((value: any, i: number) => (
                                            <li key={i} className={activePage == value ? "active page-item" : "page-item"} onClick={() => onClickPage(value)} ><span className="page-link">{value}</span></li>
                                        ))
                                    }
                                    {pageArray.length <= 5 &&
                                        pageArray.map((number: number, i: number) => (
                                            <li className={activePage == number ? "active page-item" : "page-item"} key={i}>
                                                <button className="page-link" onClick={() => onClickPage(number)}>
                                                    {number}
                                                </button>
                                            </li>
                                        ))}
                                    <li className="page-item">
                                        <button className={`page-link next ${activePage == pageArray.length ? "disabled" : ""}`} onClick={onClickNextPage} >
                                            &rsaquo;
                                        </button>
                                    </li>
                                    <li className="page-item" onClick={() => onClickDoubbleArrows("&raquo;")}><span className={`page-link next ${activePage == pageArray.length ? "disabled" : ""}`} >&raquo;</span></li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
