'use client'

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function TertiaryBtn({
  onClick,
  children,
  type = "button",
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-(--green-kidcoin) px-6 rounded-md shadow-[0_4px_#3b3b3b] cursor-pointer active:translate-y-[2px] text-white font-bold"
    >
      {children}
    </button>
  );
}
