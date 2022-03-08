import styled, { keyframes } from "styled-components";

interface ButtonProps {
    timingAnimate?: string;
}

const timeWidth = keyframes`
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
`

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
    > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: ${props => props.theme.colors.contain};
        box-shadow: ${props => props.theme.colors.boxShadow};
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;
    }
    > div span {
        flex: 1;
    }
    > div span:first-child {
        border-right: 1px solid ${props => props.theme.colors.background};
    }
    > div span:last-child {
        border-left: 1px solid ${props => props.theme.colors.background};
    }
    > span {
        font-size: 8.5rem;
        margin: 0 0.5rem;
    }
`;

export const CountdownButton = styled.button<ButtonProps>`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 100%;
    border: 0;
    border-radius: 5px;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.whiteColor};
    font-size: 1.25rem;
    font-weight: 600;
    transition: 0.2s;
    > svg {
        margin-top: 1px;
        margin-left: 10px;
        path {
            transition: 0.2s;
            fill: ${props => props.theme.colors.whiteColor};
        }
    }
    :not(:disabled):hover {
        background: ${props => props.theme.colors.blueDark};
    }
    &.active {
        background: ${props => props.theme.colors.whiteColor};
        color: ${props => props.theme.colors.text};
        position: relative;
        overflow: hidden;
        &:before{
            content: "";
            position: absolute;
            bottom: 0;
            height: 4px;
            width: 100%;
            background: ${props => props.theme.colors.grayLine};
        }
        &:after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            transition: 0.2s;
            width: 100%;
            animation: ${timeWidth} linear forwards;
            animation-duration: ${props => props.timingAnimate || null};
            background: ${props => props.theme.colors.green};
        }
        svg {
            margin-top: initial;
            margin-left: 2px;
            height: 40px;
            width: 40px;
            path {
                transition: 0.2s;
                fill: ${props => props.theme.colors.text};
            }
        }
        :hover {
            background: ${props => props.theme.colors.red};
            color: ${props => props.theme.colors.whiteColor};
            svg path {
                fill: ${props => props.theme.colors.whiteColor};
            }
        }
    }
    :disabled {
        position: relative;
        background: ${props => props.theme.colors.whiteColor};
        color: ${props => props.theme.colors.text};
        cursor: not-allowed;
        overflow: hidden;
        :before {
            content: "";
            position: absolute;
            bottom: 0;
            height: 4px;
            width: 100%;
            background: ${props => props.theme.colors.green};
        }
        > svg {
            margin-top: 2px;
            margin-left: 14px;
            path {
                fill: ${props => props.theme.colors.green};
            }
        }
    }
`;
