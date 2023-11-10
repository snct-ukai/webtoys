import {TextField as TF} from "@mui/material";

const TextField = (props: {
  value: string,
  onChange: React.Dispatch<React.SetStateAction<string>>,
  className?: string
}) => {
  return (
    <TF className={props.className} value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
  )
}

export default TextField
