'use client'

import { useRouter } from "next/navigation";
import PrimaryBtnLG from "./PrimaryBtnLG";

export default function LeftDecoratorLP (){
     const router = useRouter()

    const toLoginPage = () =>{
        router.push("/")
    };

    return(
        <>
        <div className="flex items-center justify-center h-screen gap-8">
            <div>
                <img src="/assets/about-asset.png" alt="Personagem Kidcoin" className="img-animation"/>
            </div>
            <div className="flex flex-col items-center justify-center h-screen w-130">
                <h2 className="text-4xl text-left text-(--primary-font-color)">Educação financeira de forma gameficada divertida!</h2>
                <p className="text-left my-3">A KidCoin é um aplicativo gamificado que ensina educação financeira para crianças de 8 a 10 anos
                        de forma divertida e interativa. Inspirado em plataformas como o Duolingo, ele apresenta
                        desafios, missões e recompensas para ajudar os pequenos a desenvolver hábitos saudáveis de
                        economia, planejamento e uso consciente do dinheiro desde cedo.</p>
                        <p>O objetivo é tornar o aprendizado acessível e envolvente, preparando as novas gerações para um futuro financeiro mais seguro e independente.</p>
            </div>
        </div>
        </>
    );
}