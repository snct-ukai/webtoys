import {useRef, useState} from "react";
import TextField from "../components/textField.tsx";
import {QRCodeCanvas} from "qrcode.react";
import style from "./QrGenerator.module.scss";
import FilledButton from "../components/Button/FilledButton.tsx";

const QrGenerator = () => {
  const [qrValue, setQrValue] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);
  const downloadQRCode = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;
    const image = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code-${qrValue}.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <>
      <div className={style.container}>
        <div ref={qrRef} className={style.QrCanvas}><QRCodeCanvas includeMargin={true} value={qrValue} size={256}/>
        </div>
        <div className={style.form}>
          <FilledButton onClick={downloadQRCode}>Download</FilledButton>
          <TextField className={style.field} value={qrValue} onChange={setQrValue}/>
        </div>
      </div>
    </>
  )
}

export default QrGenerator
