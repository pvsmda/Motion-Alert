import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ChallengesContext } from "../contexts/ChallengesContext";

import * as S from "../styles/components/LevelUpModal";
import TwitterLogo from '../../public/icons/twitter.svg';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    const { title } = useContext(ThemeContext);

    return (
        <S.Overlay>
            <S.Container active={title === "dark"}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <button className="closeModal" type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
                <button className="socialShare" type="button" >Compartilhar no Twitter <TwitterLogo/></button>
            </S.Container>
        </S.Overlay>
    );
}
