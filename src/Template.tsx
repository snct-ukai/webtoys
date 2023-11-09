import Button from "./components/Button/FilledButton.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactNode, useEffect, useState} from "react";
import style from "./Template.module.scss"

const Template = (props: { children: ReactNode }) => {
  const router = useNavigate();
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [location.pathname, setFlag]);

  return (
    <div className={style.container}>
      {flag && <div style={{marginBottom:"20px"}}><Button onClick={() => router('/')}>Home</Button></div>}
      <div className={style.main}>{props.children}</div>
      <div className={style.footer}>
        <footer>
          <p>
            &copy; 2023 Ukai Shota
          </p>
          <a href={"https://github.com/snct-ukai/webtoys"} target={"_blank"} rel={"noreferrer"}>Source Code</a>
        </footer>
      </div>
    </div>
  )
}

export default Template
