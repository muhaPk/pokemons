import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CardTypes, Type, Types} from "../../types/card";
// @ts-ignore
import style from "./tags.module.scss";

import {setCurrentData} from "../../redux/reducers/currentDataReducer"

export const Tags = () => {

    const { data } = useSelector((state: any) => state.data)
    const [types, setTypes] = useState<string[] | null>(null);

    const dispatch = useDispatch()

    useEffect(() => {

        let typesArray: string[] = []

        data.map((el: CardTypes) =>
            el.types.map((el: Types) =>
                typesArray.push( el.type.name )
            )
        )

        // @ts-ignore
        setTypes( [...new Set(typesArray)] )

    }, [data]);



    const filterData = (typeProps: string) => {

        const filterData = data.filter((el: CardTypes) =>
            el.types.some((type: Types) => typeProps === type.type.name)
        )

        dispatch(setCurrentData(filterData))
    }


    return (
        <div className={style.tagsWrapper}>
          tags:{" "}
          {types?.map((type: string, i: number) => (
            <span key={i} className={style.tag} onClick={() => filterData(type)}>
              {type}
            </span>
          ))}

        </div>
    )
}

