import { FunctionComponent } from "react";
import sign_banner from "@public/sign_banner.jpeg";
import {
  AnimatedBaner,
  AuthorizationLayoutContainer,
  EntryPoint,
} from './styles';

const AuthorizationLayout: FunctionComponent = ({
  children
}) => (
  <AuthorizationLayoutContainer>
    <EntryPoint>
      {children}
    </EntryPoint>
    <AnimatedBaner url={sign_banner.src}/>
  </AuthorizationLayoutContainer>
);


export default AuthorizationLayout;
