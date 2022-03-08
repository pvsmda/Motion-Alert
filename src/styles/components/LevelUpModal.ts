import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(60, 60, 60, 0.8);
`;

interface SpanProps {
    active?: boolean;
}

export const Container = styled.div<SpanProps>`
    position: relative;
    padding: 2rem 3rem;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
    background: ${props => props.theme.colors.whiteColor};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    header {
        background: no-repeat center;
        background-image: url(${props => props.active ? "/icons/levelupdark.svg" : "/icons/levelup.svg"});
        background-size: contain;
        font-size: 8.75rem;
        font-weight: 600;
        color: ${props => props.theme.colors.blue};
    }
    strong {
        font-size: 2.25rem;
        color: ${props => props.theme.colors.title};
    }
    p {
        font-size: 1.25rem;
        color: ${props => props.theme.colors.text};
        margin-top: 0.25rem;
    }
    button.closeModal {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        background: transparent;
        border: 0;
        font-size: 0;
    }
    button.socialShare {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        border: 0;
        border-radius: 5px;
        color: ${props => props.theme.colors.whiteColor};
        font-size: 1rem;
        font-weight: 600;
        transition: 0.2s;
        width: 100%;
        background: ${props => props.theme.colors.blueTwitter};
        margin-top: 2.5rem;
        svg {
            margin-left: 1rem;
            path {
                fill: ${props => props.theme.colors.whiteColor};
            }
        }
    }
`;
