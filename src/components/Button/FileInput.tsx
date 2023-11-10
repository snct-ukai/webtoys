import {ChangeEvent, useRef} from "react";
import FilledButton from "./FilledButton.tsx";

const FileInput = (props: {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  accept?: string,
  className?: string
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.click();
  }

  return (
    <div className={props.className}>
      <input
        ref={inputRef}
        type="file"
        accept={props.accept}
        style={{display: "none"}}
        onChange={props.onChange}
      />
      <FilledButton onClick={onClick}>Select File</FilledButton>
    </div>
  )
}

export default FileInput
