import {useNavigate} from "react-router-dom";
import Card from "../components/Card/Card.tsx";
import {Image, Numbers, QrCode} from "@mui/icons-material";
import style from "./Home.module.scss";

const Home = () => {
  const router = useNavigate();
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Apps</h1>
      </div>
      <div className={style.container}>
        <Card title="QR Generator" onClick={() => router('/qr-generator')} className={style.item}><QrCode/></Card>
        <Card title="Image Resize" onClick={() => router('/image-resize')} className={style.item}><Image/></Card>
        <Card title="Base Conversion" onClick={() => router('/base-conversion')} className={style.item}><Numbers/></Card>
      </div>
    </div>
  )
}

export default Home
