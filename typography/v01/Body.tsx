import { FunctionComponent } from 'react';


type BodyType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface BodyProps {
    type: BodyType,
    children: string,
}

const bodyStyles: {[type in BodyType]: string} = {
    1: 'font-montserrat text-24 tracking-normal leading-none',
    2: 'font-montserrat text-18 tracking-normal leading-none',
    3: 'font-montserrat font-bold text-18 tracking-normal leading-none',
    4: 'font-montserrat font-medium text-16 tracking-normal leading-140p',
    5: 'font-montserrat font-bold text-16 tracking-normal leading-140p',
    6: 'font-montserrat font-semibold text-14 tracking-normal leading-none',
    7: 'font-montserrat font-light italic text-14 tracking-3p leading-none',
    8: 'font-montserrat font-medium text-14 tracking-normal leading-none',
}

const Body: FunctionComponent<BodyProps> = ({type, children}) => (
    <p className={bodyStyles[type]}>{children}</p>
)


export default Body;