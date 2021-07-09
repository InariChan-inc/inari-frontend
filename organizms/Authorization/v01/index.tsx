import { useRouter } from 'next/router';
import { FunctionComponent } from "react";
import { Button } from '../../../molecules';
import { PersonCTA } from '../../../atoms';
import { Button as Text } from '../../../typography';

interface AuthorizationProps {
}

const Authorization: FunctionComponent<AuthorizationProps> = ({

}) => {

  const router = useRouter();

  return (
  <div className="flex items-center">
      <Button 
        icon={<PersonCTA className="fill-current relative" />}
        bg="brown"
        color="white"
        className="z-10"
        style={{
          height: 54,
        }}
        onClick={() => router.push('signin')}
      >
          Увійти
      </Button>
    
      <button 
        className="bg-yellow-1 py-2 pl-16 pr-8 rounded-r-full"
        style={{
          height: 50,
          marginLeft: -38,
        }}
        onClick={() => router.push('signup')}
        >
          <Text type={1}>
            Реєстрація
          </Text>
      </button>    
  </div>
  );
};


export default Authorization;