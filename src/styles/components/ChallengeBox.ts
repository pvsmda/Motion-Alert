import styled from "styled-components";

export const ChallengeBoxContainer = styled.div`
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${props => props.theme.colors.contain};
    border-radius: 5px;
    box-shadow: ${props => props.theme.colors.boxShadow};
    text-align: center;
`;

export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }
    p {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 70%;
        line-height: 1.4;
        svg {
            margin-bottom: 1rem;
            path {
                fill: ${props => props.theme.colors.green};
                &#ejf4is8bhx0q11,
                &#ejf4is8bhx0q12 {
                    fill: ${props => props.theme.colors.contain};
                }
            }
            g {
                fill: ${props => props.theme.colors.green};
            }
            rect {
                fill: ${props => props.theme.colors.green};
            }
        }
    }
`;
export const ChallengeActive = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    header {
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid ${props => props.theme.colors.grayLine};
        font-size: 1.375rem;
        font-weight: 600;
        color: ${props => props.theme.colors.blue};
    }
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        strong {
            margin: 1.5rem 0 1rem;
            font-size: 2rem;
            font-weight: 600;
            color: ${props => props.theme.colors.title};
        }
        p {
            line-height: 1.5;
        }
    }
    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        button {
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
            &:hover {
                filter: brightness(0.9);
            }
            &.challengeFailedButton {
                background: ${props => props.theme.colors.red};
            }
            &.challengeSucceededButton {
                background: ${props => props.theme.colors.green};
            }
        }
    }
`;

// export const ChallengeNotActive = styled.div`

// `
