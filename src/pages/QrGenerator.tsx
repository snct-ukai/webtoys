import {useState} from "react";
import TextField from "../components/textField.tsx";
import {QRCodeCanvas} from "qrcode.react";
import style from "./QrGenerator.module.scss";

const QrGenerator = () => {
  const [qrValue, setQrValue] = useState('');
  return (
    <>
      <div className={style.container}>
        <QRCodeCanvas includeMargin={true} value={qrValue} size={256} className={style.QrCanvas}/>
        <TextField value={qrValue} onChange={setQrValue}/>
      </div>
    </>
  )
}

export default QrGenerator
