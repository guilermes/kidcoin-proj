'use client'

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryBtnLG({
  onClick,
  children,
  type = "button",
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white font-bold text-xl bg-(--yellow-kidcoin) px-6 py-2 rounded-md shadow-[0_4px_#3b3b3b] cursor-pointer active:translate-y-[2px]"
    >
      {children}
    </button>
  );
}
