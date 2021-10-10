import { useRouter } from 'next/router';
import {
  VoidFunctionComponent,
  CSSProperties,
  useState,
  JSXElementConstructor,
  MouseEventHandler,
} from "react";
import {
  Container,
  Tooltip,
  Circle,
} from './styles';


interface IconWithTooltipProps {
  Icon: JSXElementConstructor<{}>;
  tooltipText: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const IconWithTooltip: VoidFunctionComponent<IconWithTooltipProps> = ({
  Icon,
  tooltipText,
  style,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Container
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      style={style}
      onClick={onClick}
    >
      <Icon />
      <Tooltip
        open={open}
        onClick={(event) => event.stopPropagation()}
      >
        {tooltipText}
        <Circle />
      </Tooltip>
    </Container>
  );
};


export default IconWithTooltip;