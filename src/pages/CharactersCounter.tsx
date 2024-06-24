import {TextField} from "@mui/material";
import style from "./CharactersCounter.module.scss";
import React, {useState} from "react";

const CharactersCounter = () => {
    const [count, setCount] = useState<number>();

    const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(event.target.value.toString().length);
    }

    return (<div className={style.container}>
        <TextField onChange={handler}/>
        <div>
            <p>
                文字数 : {count}
            </p>
        </div>
    </div>)
}

export default CharactersCounter;