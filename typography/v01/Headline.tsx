import { FunctionComponent } from 'react';


type HeadlineType =  1 | 2 | 3 | 4;

interface HeadlineProps {
    className?: string
    type: HeadlineType,
    children: string,
}

const HeaderComponents: {[type in HeadlineType]: React.FunctionComponent<{children: string, className?: string}>} = {
    1: ({children, className = ''}) => <h1 className={`font-montserrat font-bold text-48 tracking-normal leading-none ${className}`}>{children}</h1>,
    2: ({children, className = ''}) => <h2 className={`font-montserrat font-bold text-36 tracking-normal leading-none ${className}`}>{children}</h2>,
    3: ({children, className = ''}) => <h3 className={`font-montserrat font-bold text-28 tracking-normal leading-none ${className}`}>{children}</h3>,
    4: ({children, className = ''}) => <h4 className={`font-montserrat font-bold text-20 tracking-normal leading-none ${className}`}>{children}</h4>,
};

const Headline: FunctionComponent<HeadlineProps> = ({
  className = '',
  type, 
  children,
}) => {
  const HeaderComponent = HeaderComponents[type];

  return <HeaderComponent className={className}>{children}</HeaderComponent>
};


export default Headline