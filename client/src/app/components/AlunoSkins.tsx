"use client";

interface AlunoSkinsProps {
  onSelecionarSkin: (novaSkin: string) => void;
}

export default function AlunoSkins({ onSelecionarSkin }: AlunoSkinsProps) {
  return (
    <section className="flex flex-col justify-center items-center gap-10">
      <h2 className="text-3xl font-bold">Minhas Skins</h2>
      <div className="flex flex-col justify-center items-center w-250">
        <span className="text-xl font-semibold">Selecione uma skin</span>
        <div className="flex flex-wrap justify-center py-10 gap-5">
          {[
            "/assets/main-char.png",
            "/assets/skin2.png",
            "/assets/skin5.png",
            "/assets/skin10.png",
          ].map((src, index) => (
            <div
              key={index}
              onClick={() => onSelecionarSkin(src)}
              className="flex flex-col justify-center items-center bg-amber-200 rounded-lg w-50 shadow-[-4px_4px_#3b3b3b] cursor-pointer active:translate-y-[2px]"
            >
              <h4 className="font-bold text-lg py-2">Skin {index + 1}</h4>
              <img src={src} alt={`Skin ${index + 1}`} className="h-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
