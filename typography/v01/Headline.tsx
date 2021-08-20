import { FunctionComponent } from 'react';


const HeaderComponents = {
    1: ({children, className = ''}) => <h1 className={`font-montserrat font-bold text-[44px] ${className}`}>{children}</h1>,
    2: ({children, className = ''}) => <h2 className={`font-montserrat font-bold text-[32px] ${className}`}>{children}</h2>,
    3: ({children, className = ''}) => <h3 className={`font-montserrat font-bold text-24 ${className}`}>{children}</h3>,
    4: ({children, className = ''}) => <h4 className={`font-montserrat font-bold text-18 ${className}`}>{children}</h4>,
};

interface HeadlineProps {
    className?: string
    type: keyof typeof HeaderComponents,
    children: string,
}


const Headline: FunctionComponent<HeadlineProps> = ({
  className = '',
  type, 
  children,
}) => {
  const HeaderComponent = HeaderComponents[type];

  return <HeaderComponent className={className}>{children}</HeaderComponent>
};


export default Headline