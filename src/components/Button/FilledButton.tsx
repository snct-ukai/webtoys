import MButton from "@mui/material/Button"

const FilledButton = (props: { children: React.ReactNode, onClick: () => void }) => {
  return <MButton onClick={props.onClick} variant="contained">{props.children}</MButton>
}

export default FilledButton
