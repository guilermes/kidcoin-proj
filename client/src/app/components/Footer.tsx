'use client'

import Link from "next/link";
import SocialButtonsGroup from "./SocialButtonsGroup";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-(--blue-kidcoin) flex flex-row gap-30 items-center justify-center py-5">
            <div>
                <Link href="/">
                    <Image src="/assets/kidcoin-logo.png" width="200" height="200" alt="KidCoin Logo" />
                </Link>
            </div>
            <p>Kidcoin 2025 - with ♡ by CODEmonkey</p>
            <SocialButtonsGroup />
        </footer>
    );
}