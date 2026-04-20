'use client'

import { useRouter } from "next/navigation";
import PrimaryBtnLG from "./PrimaryBtnLG";

export default function RightDecoratorLP (){
     const router = useRouter()

    const toLoginPage = () =>{
        router.push("/")
    };

    return(
        <>
        <div className="flex items-center justify-center h-screen gap-8">
            
            <div className="flex flex-col items-center justify-center h-screen w-130">
                <h2 className="text-4xl text-left text-(--primary-font-color)">Aprender sobre dinheiro nunca foi tão divertido</h2>
                <p className="text-left my-3">Com o KidCoin, crianças aprendem educação financeira de forma leve e interativa. A cada lição, elas
                    ganham moedas, desbloqueiam novas fases e personalizam seus avatares — tudo isso enquanto
                    desenvolvem hábitos que vão durar a vida toda.</p>
            </div>
            <div>
                <img src="/assets/about-asset2.png" alt="Personagem Kidcoin" className="img-animation" />
            </div>
        </div>
        </>
    );
}