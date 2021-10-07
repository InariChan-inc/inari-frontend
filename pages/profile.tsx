import { useState } from 'react';
import styled from 'styled-components';
import {
  Avatar,
  FutureImage,
  Helmet,
  Link
} from '@atoms';
import { Breadcrumb } from '@molecules';
import {
  Body,
  Headline,
  Link as LinkText,
} from '@typography';
import { truncateBySymbols } from '@utils';

const about = 'АарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожлитжплижпдАарпдптопатожл';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ProfileInfo = styled.section`
  position: relative;
  width: 30%;
  padding: 96px 48px;
  display: flex;
  word-wrap: break-word;
  flex-direction: column;
  align-items: center;
`;

const About = styled.div`
  width: 100%;
  > * {
    display: inline-block;
    max-width: 100%;
  }
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
  margin-bottom: 24px;
`;


function Profile() {
  
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
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
          marginBottom: 26,
        }}
      />
      <ProfileContainer>
        <ProfileInfo>
          <Avatar
            size={160}
            imageUrl={"https://cdn.pixabay.com/photo/2021/09/07/16/38/man-6604399_960_720.png"}
            style={{
              marginBottom: 24,
            }}
          />
          <Headline
            type={2}
            color="black"
            style={{
              marginBottom: 24,
            }}
          >
            Verybignickname
          </Headline>
          <Body
            type={1}
            color="brown-2"
            style={{
              marginBottom: 16,
            }}
          >
            Адмін
          </Body>
          <Body
            type={3}
            color="brown-2"
            style={{ width: '100%' }}
          >
            {
              about.length <= 500 || isAboutOpen ? about : (
                <>
                  {truncateBySymbols(about, 500)}
                  <MoreDetailsInlineButton
                    type={4}
                    color="brown-2"
                    onClick={() => setIsAboutOpen(true)}
                  >
                    Детальніше
                  </MoreDetailsInlineButton>
                </>
              )
            }
          </Body>
        </ProfileInfo>
        <FutureFeatureSection>
            <FutureImage
              width={145}
              height={226}
              style={{ marginBottom: 16 }}
            />
            <Headline
              type={3}
              color="brown-2"
              style={{ marginBottom: 32 }}
            >
              Ми ще активно розвиваємося!
            </Headline>
            <Body
              type={1}
              color="brown-2"
            >
              <FutureText>Ти знаходишся на тестовой версії, яку згодом ми наповнимо прекрасним функціоналом!</FutureText>
              <FutureText>Для цього нам потрібна твоя допомога: активно ділися з нами своїми враженнями і ідеями як ми можемо покращити наш продукт.<Link href="/" style={{ marginLeft: 4 }}><LinkText type={1}>Детальніше тут</LinkText></Link>.</FutureText>
              <FutureText>Якщо є бажання ще й допомагати нам: приєднуйся до нашої команди!<Link href="/" style={{ marginLeft: 4 }}><LinkText type={1}>Детальніше тутАктуальну інформацію дізнавайся тут</LinkText></Link>.</FutureText>
              <FutureText>Дякуємо, що ти з нами! Бажаємо приємного перегляду аніме :)</FutureText>
            </Body>
        </FutureFeatureSection>
      </ProfileContainer>
    </ProfileWrapper>
  )
}

export default Profile;