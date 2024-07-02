import {TextField as TF} from "@mui/material";
import React from "react";

const TextField = (props: {
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>,
    className?: string,
    label?: string,
}) => {
    return (
        <TF className={props.className} value={props.value} label={props.label}
            onChange={(e) => props.onChange(e.target.value)}/>
    )
}

export default TextField
