import React from 'react'
import { NavLink } from 'react-router-dom';

interface Props {
    breadcumList: any;
}

export const Breadcum: React.FC<Props> = (props: Props) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div>
                        <nav aria-label="breadcrumb" className="first">
                            <ol className="breadcrumb indigo lighten-6 my-3 navbar-light ">
                                {props.breadcumList.map((item: any, i: number) => (
                                    <li key={i} className={`${item.isActive ? 'breadcum-active-label' : 'breadcrumb-item font-weight-bold font-italic'}`}>
                                        < NavLink to={item.isActive ? '' : item.routerLink} className={`${item.isActive ? 'black-text  active-1 text-decoration-none breadcum-text-color  disabled-link' : 'black-text breadcum-text-color   text-decoration-none'}`}>
                                            <span className={`${item.isActive ? 'breadcum-label' : 'breadcum-label mr-md-3 mr-2'}`}>{item.value}</span>
                                        </NavLink>
                                        {/* <i className={`${item.isActive ? '' : 'bi bi-chevron-right breadcum-arrow'}`}></i> */}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
