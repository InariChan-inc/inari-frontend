import styled from "styled-components";
import { Body } from "@typography";


export const AnimeCardContainer = styled.article`
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 420px;
    margin-left: 15px;
    border: 1px solid ${props => props.theme.colors['yellow-6']};
    border-radius: 3px;


    &:hover {
        border-color: ${props => props.theme.colors['brown-2']};
        box-shadow: 0 4px 16px 0 #FEDF9A;
    }
`;

export const AnimePoster = styled.div<{ path: string }>`
    width: 100%;
    height: 340px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('${props => process.env.INARIBEHOST + props.path.split(' ').join('%20')}');
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1 1 0%;
    width: 100%;
    height: 80px;
    padding: 20px 32px;
`;

export const AnimeFormatLabel = styled(Body)`
    position: absolute;
    top: 15px;
    left: -15px;
    cursor: pointer;
    padding: 8px;
    border-radius: 2px;
    background-color: ${props => props.theme.colors["brown-2"]};
    color: ${props => props.theme.colors.white};
`;
