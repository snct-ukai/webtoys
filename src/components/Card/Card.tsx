import {Card as MCard, CardContent, Typography} from '@mui/material';
import {ReactNode} from "react";

const Card = (props: {
  title: string,
  onClick: () => void,
  children?: ReactNode,
  className?: string
}) => {
  return (
    <MCard onClick={props.onClick} style={{width: 360}} className={props.className}>
      <CardContent>
        {props.children}
        <Typography>{props.title}</Typography>
      </CardContent>
    </MCard>
  )
}

export default Card
