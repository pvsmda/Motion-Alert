import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import {CompletedChallengesContainer} from "../styles/components/CompletedChallenges"

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <CompletedChallengesContainer>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesContainer>
    );
}
