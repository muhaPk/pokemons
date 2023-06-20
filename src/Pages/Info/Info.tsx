import React, {FC, useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom";
import {useSelector} from "react-redux";
// @ts-ignore
import style from "./info.module.scss";
import {CardTypes, Stats} from "../../types/card";

export const Info:FC = () => {

    const {id} = useParams()

    const [pokemon, setPokemon] = useState<CardTypes | null>(null);

    const { data } = useSelector((state: any) => state.data)

    useEffect(() => {

        const getData = data.find((el: CardTypes) => el.id === Number(id))
        setPokemon(getData)

    }, [data, id]);


    return (
        <div className={style.container}>
            <Link className={style.link} to='/'>back</Link>
            <img className={style.image} alt="item" height='96' width='96' src={pokemon?.sprites.front_default} />

            <div className={style.grid}>
                <div className={style.name}>name: </div>
                <div className={style.description}>{pokemon?.name}</div>
            </div>
            <div className={style.grid}>
                <div className={style.name}>stats: </div>
                <div className={style.description}>{pokemon?.stats.map((el: Stats) => el.base_stat).join(', ')}</div>
            </div>
            <div className={style.grid}>
                <div className={style.name}>effort: </div>
                <div className={style.description}>{pokemon?.stats.map((el: Stats) => el.effort).join(', ')}</div>
            </div>
            <div className={style.grid}>
                <div className={style.name}>moves: </div>
                <div className={style.description}>{pokemon?.moves.map((el: any) => el.move.name).join(', ')}</div>
            </div>
        </div>
    );
}
