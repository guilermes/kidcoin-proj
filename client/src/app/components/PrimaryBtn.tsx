'use client'

import { Button } from "react-bootstrap";

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryBtn({
  onClick,
  children,
  type = "button",
}: BtnProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className="bg-(--yellow-kidcoin) px-6 rounded-md shadow-[0_4px_#3b3b3b] cursor-pointer active:translate-y-0.5 text-white font-bold"
    >
      {children}
    </Button>
  );
}
