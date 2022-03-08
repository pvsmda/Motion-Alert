import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

import * as S from "../styles/components/ExperienceBar";

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(
        ChallengesContext
    );

    const percentToNextLevel =
        Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <S.ExperienceBar>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span
                    className="currentExperience"
                    style={{ left: `${percentToNextLevel}%` }}
                >
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </S.ExperienceBar>
    );
}
