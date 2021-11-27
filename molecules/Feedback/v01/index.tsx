import { VoidFunctionComponent } from "react";
import { Helper } from "@typography";
import {
  CheckCircle,
  UnderlineCheck,
  ErrorIcon,
} from '@atoms/icons';
import {
  IconWrapper,
  FeedbackContainer,
} from './styles';

export interface FeedbackProps {
  text: string;
  type: 'pre-success' | 'success' | 'error';
}


const Feedback: VoidFunctionComponent<FeedbackProps> = ({
  text,
  type
}) => (
  <FeedbackContainer>
      {text ? (
          <>
            <IconWrapper>
              {type === 'pre-success' ? (
                <UnderlineCheck
                  color="green-2"
                  size={24}
                />
              ) : type === 'success' ? (
                <CheckCircle
                  color="yellow-5"
                  size={24}
                />
              ) : (
                <ErrorIcon
                  color="red-2"
                  size={24}
                />
              )}
            </IconWrapper>
            <Helper color={type === 'pre-success' ? 'green-2' : type === 'success' ? 'yellow-5' : 'red-2'}>{text}</Helper>
          </>
        ): null}
  </FeedbackContainer>
);

export default Feedback;