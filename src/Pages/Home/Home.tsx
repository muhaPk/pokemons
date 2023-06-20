import React, {FC, useEffect} from 'react';
import {getData} from "../../redux/actions/data";
import {useDispatch, useSelector} from "react-redux";
import { Cards } from "../../Components/Cards/Cards"
import {Pagination} from "../../Components/Pagination/Pagination";
import {Search} from "../../Components/Search/Search";
// @ts-ignore
import style from "./home.module.scss";
import {Tags} from "../../Components/Tags/Tags";

export const Home:FC = () => {

    const { data } = useSelector((state: any) => state.data)

    const dispatch = useDispatch()

    useEffect(() => {

        if (!data.length) {
            let endpoints: string[] = [];

            for (let n = 1; n < 400; n++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${n}/`);
            }

            // @ts-ignore
            dispatch(getData(endpoints));
        }

    }, [data, dispatch]);

    if (!data.length) {
        return (<div className={style.container}><p className={style.loading}>Loading...</p></div>);
    }

    return (
        <div className={style.container}>
            <Search />
            <Pagination />
            <Tags />
            <Cards />
        </div>
    );
}
