import { FunctionComponent } from "react";
import { Overlay as Container } from "./styles";


export interface OverlayProps {
  open: boolean;
}

const Overlay: FunctionComponent<OverlayProps> = ({
  open,
  children
}) => (
  <Container open={open}>{children}</Container>
);


export default Overlay;