import {useNavigate} from "react-router-dom";
import Card from "../components/Card/Card.tsx";
import {Image, QrCode} from "@mui/icons-material";
import style from "./Home.module.scss";

const Home = () => {
  const router = useNavigate();
  return (
    <>
      <div className={style.container}>
        <Card title="QR Generator" onClick={() => router('/qr-generator')} className={style.item}><QrCode/></Card>
        <Card title="Image Resize" onClick={() => router('/image-resize')} className={style.item}><Image/></Card>
      </div>
    </>
  )
}

export default Home
