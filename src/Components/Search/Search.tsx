import React, {FC, useCallback} from "react";
// @ts-ignore
import style from "./search.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentData} from "../../redux/reducers/currentDataReducer"

export const Search: FC = () => {

    const { data } = useSelector((state: any) => state.data)
    const { currentPage } = useSelector((state: any) => state.currentData)

    const dispatch = useDispatch()

    const searchFilter = useCallback(
        (value: string) => {

            const start = currentPage * 50
            const end = (currentPage + 1) * 50

            const filterData = data.filter((el: any) =>
                el.name.includes(value.toLowerCase())
            );

            dispatch(setCurrentData( value ? filterData : filterData.slice(start, end)))
        },
        [data, currentPage]
    );

  return (
    <div className={style.searchWrapper}>
      <input
        onChange={(e) => searchFilter(e.target.value)}
        placeholder="Tags"
        className={style.search}
        autoFocus
      />
    </div>
  );
}
