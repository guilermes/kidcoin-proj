'use client'

import { useRouter } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn"

export default function LandingPageMenu() {
    const router = useRouter();

    const toLoginPage = () => {
        router.push("/login")
    };

    return (
        <>
            <nav className="landing_page_menu">
                <div>
                    <a href="/home">
                        <img src="/assets/kidcoin-logo.png" alt="KidCoin Logo" />
                    </a>
                </div>
                <ul>
                    <li><a href="/signup">Cadastre-se</a></li>
                    <li><PrimaryBtn onClick={toLoginPage}>Entrar</PrimaryBtn></li>
                </ul>
            </nav>
        </>
    )
}