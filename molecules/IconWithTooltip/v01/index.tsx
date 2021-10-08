import {
  VoidFunctionComponent,
  CSSProperties,
  useState,
} from "react";
import {
  Container,
  Tooltip,
} from './styles';


interface IconWithTooltipProps {
  icon: JSX.Element;
  tooltipText: string;
  style?: CSSProperties,
}

const IconWithTooltip: VoidFunctionComponent<IconWithTooltipProps> = ({
  icon,
  tooltipText,
  style,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      style={style}
    >
      {icon}
     <Tooltip open={open}>{tooltipText}</Tooltip>
    </Container>
  );
};


export default IconWithTooltip;