import React, {FC} from "react";
// @ts-ignore
import style from './cards.module.scss';
import { Card } from "../Card/Card";
import {useSelector} from "react-redux";

import {CardTypes} from '../../types/card'


export const Cards: FC = () => {

    const { currentData } = useSelector((state: any) => state.currentData)

  return (

      <div className={style.cardWrapper}>
        {
            currentData?.map(( el: CardTypes, i: number) => (
            <Card
                key={i}
                src={el.sprites.front_default}
                name={el.name}
                types={el.types}
                id={el.id}
            />
            ))
        }
      </div>

  );
}
