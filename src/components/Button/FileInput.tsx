import {ChangeEvent, useRef} from "react";
import FilledButton from "./FilledButton.tsx";

const FileInput = (props: { onChange?: (e: ChangeEvent<HTMLInputElement>) => void, accept?: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.click();
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={props.accept}
        style={{display: "none"}}
        onChange={props.onChange}
      />
      <FilledButton onClick={onClick}>ファイルを選択</FilledButton>
    </>
  )
}

export default FileInput
