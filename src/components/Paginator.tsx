import React from 'react';
import Pagination from "react-bootstrap/Pagination";
import { changePage } from "../reducers/vehiclesSlice";
import { useDispatch } from "react-redux";

const Paginator = (props: { currentPage: number, dataLength: number }) => {

    const dispatch = useDispatch();

    const goToPage = (page: number) => {
        console.log('page', page);
        dispatch(changePage(page))
    };

    const createPagination = (perPage: number) => {
        const itemsCount = props.dataLength;
        const paginationCount = !!(itemsCount % perPage) ? itemsCount / perPage + 1 : itemsCount / perPage;

        return Array.from({ length: paginationCount }, (v, i) => ++i)
            .map((page, ind) => {

                return (
                    <Pagination.Item
                        active={page === props.currentPage}
                        key={ind}
                        onClick={goToPage.bind(null, page)}>
                        {page}
                    </Pagination.Item>
                )
            })
    };

    return (
        <Pagination>
            {createPagination(5)}
        </Pagination>
    )
};

export default Paginator
