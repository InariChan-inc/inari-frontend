import { useRouter } from 'next/router';
import { FunctionComponent } from "react";
import { Person } from '../../../atoms/icons';
import { Button } from '../../../molecules';
import { Button as Text } from '../../../typography';

import { Sun } from '../../../atoms/icons';

interface AuthorizationProps {
}

const Authorization: FunctionComponent<AuthorizationProps> = ({

}) => {

  const router = useRouter();

  return (
    <div className="flex items-center h-full">
      <Sun 
        size={36}
        className="text-brown-2 dark:text-white fill-current cursor-pointer mr-8" 
        onClick={() => console.log('Theme switched!')}
      />
      <div className="flex items-center">
        <Button
          icon={<Person className="fill-current relative" />}
          className="z-10 px-[20px] py-[12px] rounded-[40px]"
          onClick={() => router.push('signin')}
        >
            Увійти
        </Button>
      
        <button 
          className="bg-yellow-1 hover:bg-yellow-2 duration-300 py-[10px] px-6 rounded-r-[40px] ml-[-14px]"
          onClick={() => router.push('signup')}
          >
            <Text type={1}>
              Реєстрація
            </Text>
        </button>    
      </div>
    </div>
  );
};


export default Authorization;