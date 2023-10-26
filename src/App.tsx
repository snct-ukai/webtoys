import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import QrGenerator from "./pages/QrGenerator.tsx";
import ImageResize from "./pages/ImageResize.tsx";
import Template from "./Template.tsx";

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/qr-generator" element={<QrGenerator/>}/>
          <Route path="image-resize" element={<ImageResize/>}/>
        </Routes>
      </Template>
    </BrowserRouter>
  )
}

export default App
