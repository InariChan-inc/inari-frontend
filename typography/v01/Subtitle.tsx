import { FunctionComponent } from "react";

interface SubtitleProps {
    children: string,
}

const Subtitle: FunctionComponent<SubtitleProps> = ({children}) => (
    <h3 className="font-montserrat font-medium text-18 tracking-1p leading-140p">{children}</h3>
)


export default Subtitle;