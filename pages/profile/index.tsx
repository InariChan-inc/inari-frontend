import { useState } from 'react';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import {
  Edit,
  Share,
} from '@icons';
import {
  Avatar,
  FutureImage,
  Helmet,
  Link,
  Query,
} from '@atoms';
import {
  Breadcrumb,
  IconWithTooltip,
} from '@molecules';
import {
  Body,
  Headline,
  Link as LinkText,
} from '@typography';
import { sleep, truncateBySymbols } from '@utils';
import { useRouter } from 'next/router';
import { UserData } from '@common/graphql/interfaces';
import client from '@common/graphql/client';
import { useSelector } from 'react-redux';
import { isUserLoggedIn } from '@r/selectors/token';


const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 32px 60px;
  user-select: none;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ControlsPanel = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  display: flex;

  > svg {
    cursor: pointer;
  }
`;

const ProfileInfo = styled.section`
  position: relative;
  width: 30%;
  padding: 96px 30px;
  display: flex;
  word-wrap: break-word;
  flex-direction: column;
  align-items: center;
`;

const ProfileDetail = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const MoreDetailsInlineButton = styled(Body)`
  display: inline-block;
  cursor: pointer;
  margin-left: 4px;
`;

const FutureFeatureSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 70%;
  height: 100%;
  background-color: ${props => props.theme.colors['yellow-7']};
  border-radius: 10px;
  padding: 96px 10% 32px;
`;

const FutureText = styled.span`
  display: block;
  margin-bottom: 15px;
`;


const GET_DATA = gql`
  {
    profile {
      name
      aboutMe
      avatar {
        path
      }
      roleData {
        name
        key
        permissions
      }
      hashColor
    }
  }
`;

function Profile() {
  const router = useRouter();
  
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState('Поширити профіль');
  const isLogged = useSelector(isUserLoggedIn);

  if (process.browser && !isLogged) {
    router.push('/signin');
  }

  return  isLogged ? (
    <ProfileWrapper>
      <Helmet title="Профіль" />
      <Breadcrumb
        crumbs={[
          {
            name: 'Головна',
            to: '/'
          },
          {
            name: 'Профіль',
            to: '/profile'
          }
        ]}
        style={{
          marginBottom: 30,
        }}
      />
      <ProfileContainer>
        <Query<{profile: Omit<UserData, 'email' | 'theme'>; }> query={GET_DATA} client={client}>
          {({
            data,
            loading,
            error
          }) => {
              return (
              <ProfileInfo>
                <ControlsPanel>
                  <IconWithTooltip
                    Icon={Edit}
                    tooltipText="Налаштувати профіль"
                    onClick={() => router.push('/settings')}
                    style={{ marginRight: 24 }}
                  />
                  <IconWithTooltip
                    Icon={Share}
                    tooltipText={shareMessage}
                    onClick={() => {
                      copy(`${process.env.HOST}/profile/${data.profile.name}`)
                      setShareMessage('Скопійовано :)')
                    }}
                    onMouseOut={() => { sleep(() => {setShareMessage('Поширити профіль')}, 400) }}
                  />
                </ControlsPanel>
                <Avatar
                  size={160}
                  fontSize={72}
                  color={!loading ? data.profile.hashColor : null}
                  imageUrl={!loading ? data.profile.avatar?.path : null}
                  name={!loading ? data.profile.name : null}
                  style={{
                    marginBottom: 20,
                  }}
                />
                {!loading ? (
                  <Headline
                    type={2}
                    color="black"
                    style={{
                      marginBottom: 15,
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    {data.profile.name}
                  </Headline>
                ) : null}
                <ProfileDetail>

                  {!loading && data.profile.roleData ? (
                   <Body
                     type={1}
                     color="brown-2"
                     style={{ marginRight: 10 }}
                   >
                     {data.profile.roleData.name}{/*,*/}
                   </Body>
                  ) : null}

                  {/* <Body
                    type={1}
                    color="brown-1"
                  >зареєс. 01.11.2021</Body> */}

                </ProfileDetail>
                
                {!loading && data.profile.aboutMe ? (
                  <Body
                    type={3}
                    color="brown-2"
                    style={{ width: '100%' }}
                  >
                    {
                      data.profile.aboutMe.length <= 500 ? data.profile.aboutMe : (
                        <>
                          {isAboutOpen ? data.profile.aboutMe : truncateBySymbols(data.profile.aboutMe, 500)}
                          <MoreDetailsInlineButton
                            type={4}
                            color="brown-2"
                            onClick={() => setIsAboutOpen(prev => !prev)}
                          >
                            {isAboutOpen ? 'Сховати' : 'Детальніше'}
                          </MoreDetailsInlineButton>
                        </>
                      )
                    }
                  </Body>
                ): null} 

              </ProfileInfo>
            );
          }}
        </Query>
        <FutureFeatureSection>
            <FutureImage
              width={145}
              height={226}
              style={{ marginBottom: 15 }}
            />
            <Headline
              type={3}
              color="brown-2"
              style={{ marginBottom: 30 }}
            >
              Ми ще активно розвиваємося!
            </Headline>
            <Body
              type={1}
              color="brown-2"
            >
              <FutureText>Ти знаходишся на тестовой версії, яку згодом ми наповнимо прекрасним функціоналом!</FutureText>
              <FutureText>Для цього нам потрібна твоя допомога: активно ділися з нами своїми враженнями і ідеями як ми можемо покращити наш продукт.<Link href="/" style={{ marginLeft: 4 }}><LinkText type={1}>Детальніше тут</LinkText></Link>.</FutureText>
              <FutureText>Якщо є бажання ще й допомагати нам: приєднуйся до нашої команди!<Link href="/" style={{ marginLeft: 4 }}><LinkText type={1}>Актуальну інформацію дізнавайся тут</LinkText></Link>.</FutureText>
              <FutureText>Дякуємо, що ти з нами! Бажаємо приємного перегляду аніме :)</FutureText>
            </Body>
        </FutureFeatureSection>
      </ProfileContainer>
    </ProfileWrapper>
  ) : null;
}

export default Profile;