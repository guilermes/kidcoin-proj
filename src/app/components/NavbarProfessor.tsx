'use client'

import { useRouter } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn"

export default function NavbarProfessor(){
    const router = useRouter();

     const toLoginPage = () => {
        router.push("/login")
  };

    return(
        <>
            <nav className="landing_page_menu">
                <div>
                    <a href="/dashboard">
                        <img src="/assets/kidcoin-logo.png" alt="KidCoin Logo" />
                    </a>
                </div>
            </nav>
        </>
    )
}