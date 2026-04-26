'use client'

import { useRouter } from "next/navigation";
import PrimaryBtnLG from "./PrimaryBtnLG";

export default function Hero (){

     const router = useRouter()

    const toLoginPage = () =>{
        router.push("/login")
    };

    return(
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center h-screen w-120">
                <h2 className="text-4xl text-center text-(--primary-font-color)">Aprender sobre dinheiro ficou incrivelmente divertido!</h2>
                <PrimaryBtnLG onClick={toLoginPage}>JOGAR AGORA</PrimaryBtnLG>
            </div>
            <div>
                <img src="../../public/assets/main-char.png" alt="Personagem Kidcoin" className="img-animation"/>
            </div>
        </div>
        </>
    );
}