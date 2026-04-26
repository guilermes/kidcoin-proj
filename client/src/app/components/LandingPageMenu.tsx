'use client'

import { useRouter } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn"
import Image from "next/image";

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
                        <Image src="/assets/kidcoin-logo.png" width="100" height="100" alt="KidCoin Logo" />
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