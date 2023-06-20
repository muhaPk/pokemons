import React, {FC, useMemo} from "react";
import ReactPaginate from 'react-paginate';
// @ts-ignore
import style from './pagination.module.scss';

import { useSelector, useDispatch } from "react-redux";
// @ts-ignore
import {setCurrentData, setCurrentPage} from "../../redux/reducers/currentDataReducer"

export const Pagination: FC = () => {

    const dispatch = useDispatch()

    const { data } = useSelector((state: any) => state.data)
    const { currentPage } = useSelector((state: any) => state.currentData)

    const itemsPerPage = useMemo(() => {
        return 50;
    }, []);

    const pageCount = useMemo(() => {
        return Math.ceil(data?.length / itemsPerPage);
    }, [data, itemsPerPage]);


    const handlePageClick = (event: any) => {
        const itemOffset = (event.selected * itemsPerPage) % data?.length;

        const endOffset = itemOffset + itemsPerPage;
        const currentItems = data?.slice(itemOffset, endOffset);

        dispatch(setCurrentPage(event.selected))
        dispatch(setCurrentData(currentItems))
    };

    return (
        <ReactPaginate
            forcePage={currentPage}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className={style.pagination}
        />
    )
}
