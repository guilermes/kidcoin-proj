'use client'

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function SecundaryBtn({
  onClick,
  children,
  type = "button",
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-(--blue-kidcoin) px-6 rounded-md shadow-[0_4px_#3b3b3b] cursor-pointer active:translate-y-[2px] text-white font-bold"
    >
      {children}
    </button>
  );
}
