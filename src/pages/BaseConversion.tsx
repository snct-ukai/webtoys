import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";
import style from "./BaseConversion.module.scss";

const BaseConversion = () => {
  const [number, setNumber] = useState("");

  const handleBinaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const binaryValue = value.replace(/[^0-1]/g, "");
    setNumber(parseInt(binaryValue, 2).toString(10));
  }

  const handleOctalChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const octalValue = value.replace(/[^0-7]/g, "");
    setNumber(parseInt(octalValue, 8).toString(10));
  }

  const handleDecimalChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const decimalValue = value.replace(/[^0-9]/g, "");
    setNumber(decimalValue);
  }

  const handleHexadecimalChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const hexadecimalValue = value.replace(/[^0-9a-fA-F]/g, "");
    setNumber(parseInt(hexadecimalValue, 16).toString(10));
  }

  return (
    <div className={style.container}>
      <TextField className={style.item} label="Binary" value={parseInt(number).toString(2)} onChange={handleBinaryChange} size="small"/>
      <TextField className={style.item} label="Octal" value={parseInt(number).toString(8)} onChange={handleOctalChange} size="small"/>
      <TextField className={style.item} label="Decimal" value={number} onChange={handleDecimalChange} size="small"/>
      <TextField className={style.item} label="Hexadecimal" value={parseInt(number).toString(16)} onChange={handleHexadecimalChange} size="small"/>
    </div>
  );
}

export default BaseConversion
