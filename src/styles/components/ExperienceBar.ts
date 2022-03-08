import styled from "styled-components";

export const ExperienceBar = styled.header`
    display: flex;
    align-items: center;
    span {
        font-size: 1rem;
    }
    > div {
        position: relative;
        margin: 0 1.5rem;
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: ${props => props.theme.colors.grayLine};
    }
    > div > div {
        height: 4px;
        border-radius: 4px;
        background: ${props => props.theme.colors.green};
    }
    span.currentExperience {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
    }
`;
