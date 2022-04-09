import {
  VoidFunctionComponent,
} from "react";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { setFocus } from '@r/actions/headerSearch';
import { Link } from '@atoms';
import {
  AnimeRowContainer,
  Counter,
  CounterWrapper,
  DataWrapper,
  Description,
  Image,
  TitleWrapper,
} from './styles';
import { AnimeData, AnimeFormat } from '@common/graphql/interfaces';
import poster_default from '@public/mok_poster.png';


export interface AnimeRowProps extends Partial<Pick<AnimeData, 'id' | 'name' | 'poster' | 'description' | 'format' | 'currentCountEpisodes' | 'countEpisodes'>>  {

}

const ResponsiveEllipsis = responsiveHOC(0)(LinesEllipsis);

const AnimeRow: VoidFunctionComponent<AnimeRowProps> = ({
  id = 0,
  name = 'Lorem ipsum dolor sit amet',
  poster: { path, pathResized } = {},
  description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit, odio fugiat deserunt enim voluptatum magni, quisquam, doloribus eaque ratione blanditiis suscipit porro quo voluptates beatae aliquam. Nisi, magni nobis?',
  format,
  currentCountEpisodes = 100,
  countEpisodes = 100
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    router.push(`/anime/${id}`);

    dispatch(setFocus(false));
  };

  return (
    <AnimeRowContainer onClick={handleClick}>
      <Image path={pathResized || path || poster_default.src} />
      <DataWrapper>
        <TitleWrapper>
          {name}
        </TitleWrapper>
        {format === AnimeFormat.TV ? (
          <CounterWrapper>
            Серії:
            <Counter type={3} color="brown-2">{currentCountEpisodes}/{countEpisodes}</Counter>
          </CounterWrapper>
        ) : null}
        <Description
          type={3}
          color="brown-3"
        >
          <ResponsiveEllipsis
            text={description}
            maxLine="5"
            ellipsis="..."
            trimRight
            basedOn="letters"
          /> 
        </Description>
      </DataWrapper>
    </AnimeRowContainer>
  );
};


export default AnimeRow;