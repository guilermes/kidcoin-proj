'use client'

import LandingPageMenu from "../components/LandingPageMenu";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import PrimaryBtnLG from "../components/PrimaryBtnLG";

export default function Signup() {
    return (
        <>
            <LandingPageMenu></LandingPageMenu>
            <PrimaryBtn>Sou Professor!</PrimaryBtn>
            <PrimaryBtnLG>Sou Aluno!</PrimaryBtnLG>
            <Footer></Footer>
        </>
    )
}