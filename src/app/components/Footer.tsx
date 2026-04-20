'use client'

import SocialButtonsGroup from "./SocialButtonsGroup";

export default function Footer(){
    return(
        <footer className="bg-(--blue-kidcoin) flex flex-row gap-30 items-center justify-center py-5">
            <div>
                <a href="/">
                    <img src="/assets/kidcoin-logo.png" alt="KidCoin Logo" />
                </a>
            </div>
            <p>Kidcoin 2025 - with ♡ by CODEmonkey</p>
            <SocialButtonsGroup />
        </footer>
    );
}