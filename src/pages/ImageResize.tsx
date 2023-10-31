import React, {useEffect, useState} from "react";
import style from "./ImageResize.module.scss";
import FileInput from "../components/Button/FileInput.tsx";
import {Radio, Slider, TextField} from "@mui/material";

const ImageResize = () => {
  const [file, setFile] = useState<File | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [mode, setMode] = useState<"percent" | "pixel">("percent");
  const [range, setRange] = useState(50);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resizeImage = async (image: ArrayBuffer,
                             mode: "percent" | "pixel",
                             range: number,
                             width: number,
                             height: number) => {
    const img = new Image();
    const blob = new Blob([image], {type: "image/jpeg"});
    img.src = URL.createObjectURL(blob);
    await new Promise((resolve) => {
      img.onload = () => {
        resolve(null);
      }
    });
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w: number, h: number;
    if (mode === "percent") {
      w = img.width * (range / 100);
      h = img.height * (range / 100);
      setWidth(w);
      setHeight(h);
    } else {
      w = width;
      h = height;
    }
    w = Math.max(w, 1);
    h = Math.max(h, 1);
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const resizedImage = canvas.toDataURL("image/jpeg");
    return resizedImage.replace(/^.*,/, "");
  }

  const processImage = () => {
    if (!file) return;
    file.arrayBuffer().then(image => {
      resizeImage(image, mode, range, width, height).then(resizedImage => {
        setResizedImage(resizedImage ?? null);
      });
    })
  }
  useEffect(processImage);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  }

  const handleSlider = (_e: Event, value: number | number[]) => {
    setRange(value as number);
  }

  return (
    <div className={style.wrapper}>
      <FileInput onChange={onInput} accept={".png,.jpg,.jpeg"}/>
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.mode}>
            <label>
              <Radio name={"mode"} value="percent" checked={mode === "percent"} onChange={() => {
                setMode("percent")
              }}/>
              比率
            </label>
            <label>
              <Radio name={"mode"} value="pixel" checked={mode === "pixel"} onChange={() => {
                setMode("pixel")
              }}/>
              ピクセル
            </label>
          </div>
          <div className={style.panel}>
            {mode === "percent" ? (
              <Slider value={range} className={style.item} onChange={handleSlider}/>
            ) : (
              <>
                <TextField label={"width"} value={width} type={"number"} size={"small"} className={style.item}
                           onChange={(e) => {
                             setWidth(Number(e.target.value))
                           }}/>
                <TextField label={"height"} value={width} type={"number"} size={"small"} className={style.item}
                           onChange={(e) => {
                             setHeight(Number(e.target.value))
                           }}/>
              </>
            )}
          </div>
        </div>
        {resizedImage && (
          <img src={`data:image/jpeg;base64,${resizedImage}`} alt="リサイズ後の画像"/>
        )}
      </div>
    </div>
  )
}

export default ImageResize
