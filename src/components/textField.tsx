import {TextField as TF} from "@mui/material";

const TextField = (props: { value: string, onChange: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <TF value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
  )
}

export default TextField
