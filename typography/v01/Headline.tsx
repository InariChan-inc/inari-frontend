import { FunctionComponent } from 'react';

type HeadlineType =  1 | 2 | 3 | 4;

interface HeadlineProps {
    type: HeadlineType,
    children: string,
}

const HeaderComponents: {[type in HeadlineType]: React.FunctionComponent<{children: string}>} = {
    1: ({children}) => <h1 className="font-montserrat font-bold text-48 tracking-normal leading-none">{children}</h1>,
    2: ({children}) => <h2 className="font-montserrat font-bold text-36 tracking-normal leading-none">{children}</h2>,
    3: ({children}) => <h3 className="font-montserrat font-bold text-28 tracking-normal leading-none">{children}</h3>,
    4: ({children}) => <h4 className="font-montserrat font-bold text-20 tracking-normal leading-none">{children}</h4>,
};

const Headline: FunctionComponent<HeadlineProps> = ({type, children}) => {
    const HeaderComponent = HeaderComponents[type];

    return <HeaderComponent>{children}</HeaderComponent>
};


export default Headline