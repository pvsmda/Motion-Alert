import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.text};
    border-radius: 5px;
    padding: 5px 15px;
    padding-bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;
interface SpanProps {
    themeDark?: boolean;
}

const Span = styled.span<SpanProps>`
    width: 20px;
    height: 20px;
    background-color: white;
    border: 1px solid
        ${props =>
            props.themeDark
                ? props.theme.colors.green
                : props.theme.colors.text};
    margin-left: 10px;
    color: ${props => props.theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2px;
    background: transparent;
`;

interface ToggleThemeButtonProps {
    toggleTheme: () => void;
}

export function ToggleThemeButton({ toggleTheme }: ToggleThemeButtonProps) {
    const { title } = useContext(ThemeContext);

    return (
        <Button onClick={toggleTheme}>
            Tema escuro
            <Span themeDark={title === "dark"}>
                {title === "dark" ? "✔" : null}
            </Span>
        </Button>
    );
}
