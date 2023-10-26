import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";
import style from "./BaseConversion.module.scss";

const BaseConversion = () => {
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");

  const handleBinaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBinary(event.target.value);
    setOctal(parseInt(event.target.value, 2).toString(8));
    setDecimal(parseInt(event.target.value, 2).toString(10));
    setHexadecimal(parseInt(event.target.value, 2).toString(16));
  }

  const handleOctalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBinary(parseInt(event.target.value, 8).toString(2));
    setOctal(event.target.value);
    setDecimal(parseInt(event.target.value, 8).toString(10));
    setHexadecimal(parseInt(event.target.value, 8).toString(16));
  }

  const handleDecimalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBinary(parseInt(event.target.value, 10).toString(2));
    setOctal(parseInt(event.target.value, 10).toString(8));
    setDecimal(event.target.value);
    setHexadecimal(parseInt(event.target.value, 10).toString(16));
  }

  const handleHexadecimalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBinary(parseInt(event.target.value, 16).toString(2));
    setOctal(parseInt(event.target.value, 16).toString(8));
    setDecimal(parseInt(event.target.value, 16).toString(10));
    setHexadecimal(event.target.value);
  }

  return (
    <div className={style.container}>
      <TextField className={style.item} label="Binary" value={binary} onChange={handleBinaryChange} size="small"/>
      <TextField className={style.item} label="Octal" value={octal} onChange={handleOctalChange} size="small"/>
      <TextField className={style.item} label="Decimal" value={decimal} onChange={handleDecimalChange} size="small"/>
      <TextField className={style.item} label="Hexadecimal" value={hexadecimal} onChange={handleHexadecimalChange} size="small"/>
    </div>
  );
}

export default BaseConversion
