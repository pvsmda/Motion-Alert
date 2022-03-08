import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import LevelUpAnimation from "../../public/icons/level-up-animate.svg";
import Corpo from "../../public/icons/body.svg";
import Eye from "../../public/icons/eye.svg";

import * as S from "../styles/components/ChallengeBox";

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(
        ChallengesContext
    );
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <S.ChallengeBoxContainer>
            {activeChallenge ? (
                <S.ChallengeActive>
                    <header> Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        {activeChallenge.type === "body" ? <Corpo /> : <Eye />}
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className="challengeFailedButton"
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className="challengeSucceededButton"
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </S.ChallengeActive>
            ) : (
                <S.ChallengeNotActive>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <LevelUpAnimation />
                        Avance de level completando desafios.
                    </p>
                </S.ChallengeNotActive>
            )}
        </S.ChallengeBoxContainer>
    );
}
