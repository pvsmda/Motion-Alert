import styled from "styled-components";

interface ListProps {
    active?: boolean;
}

export const Nav = styled.nav`
    position: absolute;
    left: 0;
    width: 80px;
    height: 100vh;
    background: ${props => props.theme.colors.whiteColor};
    box-shadow: ${props => props.theme.colors.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
        position: absolute;
        top: 2rem;
        transform: scale(0.8);
        path {
            fill: ${props => props.theme.colors.blue};
        }
    }
    ul {
        width: 100%;
    }
`;

export const List = styled.li<ListProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    margin: 1rem 0;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 5px;
        height: 55px;
        border-radius: 0 5px 5px 0;
        background-color: ${props =>
            props.active ? props.theme.colors.blue : "transparent"};
        transition: 0.2s;
    }
    a {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg {
        opacity: ${props => (props.active ? 1 : 0.5)};
        g {
            opacity: 1;
        }
        path {
            stroke: ${props =>
                props.active
                    ? props.theme.colors.blue
                    : props.theme.colors.title};
        }
    }
    > span {
        position: absolute;
        right: calc(0px - 1.5rem);
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.whiteColor};
        pointer-events: none;
        transform: translateX(50%);
        opacity: 0;
        transition: 0.2s;
        z-index: -1;
        &:before,
        &:after {
            content: "";
            position: absolute;
            left: -18px;
            border: 9px solid transparent;
            border-right-color: ${props => props.theme.colors.blue};
            z-index: -1;
        }
    }
    &:hover span {
        pointer-events: initial;
        transform: translateX(100%);
        opacity: 1;
    }
`;
