import { useRouter } from 'next/router';
import { FunctionComponent } from "react";
import {
  Person,
  Sun,
} from '@icons';
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
      <Sun 
        size={36}
        style={{ marginRight: 32 }}
        color="brown-2" 
        onClick={() => console.log('Theme switched!')}
      />
      <ButtonWrapper>
        <Button
          Icon={Person}
          style={{ zIndex: 10 }}
          onClick={() => router.push('signin')}
        >
            Увійти
        </Button>
      
        <SignUpButton onClick={() => router.push('signup')}>
            <Text type={1}>
              Реєстрація
            </Text>
        </SignUpButton>    
      </ButtonWrapper>
    </AuthorizationContainer>
  );
};


export default Authorization;