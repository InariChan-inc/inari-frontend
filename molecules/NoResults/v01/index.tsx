import {
  VoidFunctionComponent,
  CSSProperties
} from "react";
import { NoResultsImage } from '@atoms';
import { Body } from '@typography';
import {
  NoResultsContainer,
  TextWrapper,
  Title,
  Message,
  QueryText
} from './styles';

interface NoResultsProps {
  imageWidth?: string | number;
  imageHeight?: string | number;
  imageStyle?: CSSProperties;
  message?: string | {
    before: string;
    query: string;
    after: string;
  }
}

const NoResults: VoidFunctionComponent<NoResultsProps> = ({
  imageWidth,
  imageHeight,
  imageStyle,
  message = 'По вашому запиту ми нічого не знайшли.'
}) => (
  <NoResultsContainer>
    <NoResultsImage
      width={imageWidth}
      height={imageHeight}
      style={imageStyle}
    />
    <TextWrapper>
      <Title type={3}>Прикра новина!</Title>
      <Message type={4}>
        {typeof message === 'string' ? message : (
          <>
            {message.before + ' '}
            <QueryText type={2}>{message.query}</QueryText>
            {message.after + ' '}
          </>
        )}
      </Message>
    </TextWrapper>
  </NoResultsContainer>
);


export default NoResults;