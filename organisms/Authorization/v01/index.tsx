import { useRouter } from 'next/router';
import { FunctionComponent } from "react";
import { Button } from '@molecules';
import { Button as Text } from '@typography';
import {
  AuthorizationContainer,
  ButtonWrapper,
  SignUpButton,
} from './styles';

interface AuthorizationProps {}

const Authorization: FunctionComponent<AuthorizationProps> = () => {

  const router = useRouter();

  return (
    <AuthorizationContainer>
      {/* <Sun 
        size={36}
        style={{
          marginRight: 32,
          cursor: 'pointer',
        }}
        color="brown-2" 
        onClick={() => console.log('Theme switched!')}
      /> */}
      <ButtonWrapper>
        <Button
          style={{ zIndex: 10 }}
          onClick={() => router.push('signup')}
        >
            Реєстрація
        </Button>
      
        <SignUpButton onClick={() => router.push('signin')}>
            <Text type={1}>
              Увійти
            </Text>
        </SignUpButton>    
      </ButtonWrapper>
    </AuthorizationContainer>
  );
};


export default Authorization;