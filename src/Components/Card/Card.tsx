import React, {FC} from "react";
import { Link } from 'react-router-dom';
// @ts-ignore
import style from "./card.module.scss";

import {Types} from "../../types/card"

type Props = {
    src: string;
    id: number;
    name: string;
    types: any;
}

export const Card: FC<Props> = ({ src, types, name, id }: Props) => {

  return (
    <div className={style.card}>

        <Link to={`/info/${id}`} className={style.cardLink}>

            <div className={style.item}>
                <img alt="item" src={src} />
            </div>

            <div className={style.itemData}>
                <div className={style.name}>{name}</div>
                <div className={style.types}>
                    {types.map(( el: Types, i: number) => (
                        <span key={i}>
                  {el.type.name}{" "}
                </span>
                    ))}
                </div>
                <div>id: {id}</div>
            </div>

        </Link>



    </div>
  );
}
