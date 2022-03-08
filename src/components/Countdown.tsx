import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import * as S from "../styles/components/Countdown";

import Start from "../../public/icons/start.svg";
import Close from "../../public/icons/close.svg";
import Finished from "../../public/icons/finished.svg";

export function Countdown() {
    const {
        minutes,
        seconds,
        total,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, "0")
        .split("");
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, "0")
        .split("");

    return (
        <div>
            <S.CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </S.CountdownContainer>

            {hasFinished ? (
                <S.CountdownButton disabled className="disabled">
                    Ciclo encerrado
                    <Finished />
                </S.CountdownButton>
            ) : (
                <>
                    {isActive ? (
                        <S.CountdownButton
                            type="button"
                            className="active"
                            onClick={resetCountdown}
                            timingAnimate={`${total}s`}
                        >
                            Abandonar ciclo
                            <Close />
                        </S.CountdownButton>
                    ) : (
                        <S.CountdownButton
                            type="button"
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <Start />
                        </S.CountdownButton>
                    )}
                </>
            )}
        </div>
    );
}
