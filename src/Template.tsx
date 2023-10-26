import Button from "./components/Button/FilledButton.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactNode, useEffect, useState} from "react";

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
    <>
      {flag && <div><Button onClick={() => router('/')}>Home</Button></div>}
      {props.children}
    </>
  )
}

export default Template
