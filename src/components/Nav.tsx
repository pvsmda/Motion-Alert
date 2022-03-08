import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import HomeIcon from "../../public/icons/home.svg";
import LeaderIcon from "../../public/icons/leader.svg";
import Logo from "../../public/logo.svg";
import * as S from "../styles/components/Nav";

interface NavProps {
    children: ReactNode;
}

export function Nav({children}: NavProps) {
    const router = useRouter();

    return (
        <S.Nav>
            <Logo />
            <ul>
                <S.List active={router.pathname === "/"}>
                    <Link href="/">
                        <a>
                            <HomeIcon />
                        </a>
                    </Link>
                    <span>Home</span>
                </S.List>
                <S.List active={router.pathname !== "/"}>
                    <Link href="/leader">
                        <a>
                            <LeaderIcon />
                        </a>
                    </Link>
                    <span>Leaderbord</span>
                </S.List>
            </ul>
            {children}
        </S.Nav>
    );
}
