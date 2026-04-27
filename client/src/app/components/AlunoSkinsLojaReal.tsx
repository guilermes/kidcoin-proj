"use client";

import { useState } from "react";
import useDinheiro from "../hooks/useDinheiro";

interface AlunoSkinsLojaRealProps {
  onSelecionarSkin: (novaSkin: string) => void;
  selectedAvatar?: string;
}

interface Skin {
  src: string;
  preco: number;
  nome: string;
}

export default function AlunoSkinsLojaReal({
  onSelecionarSkin,
  selectedAvatar,
}: AlunoSkinsLojaRealProps) {
  const { dinheiro, gastar } = useDinheiro();

  const skins: Skin[] = [
    { src: "/assets/main-char.png", preco: 0, nome: "Padrão" },
    { src: "/assets/skin2.png", preco: 500, nome: "Skin 2" },
    { src: "/assets/skin5.png", preco: 1000, nome: "Skin 5" },
    { src: "/assets/skin10.png", preco: 1500, nome: "Skin 10" },
    { src: "/assets/skin20.png", preco: 2000, nome: "Skin 20" },
    { src: "/assets/skin50.png", preco: 3000, nome: "Skin 50" },
    { src: "/assets/skin100.png", preco: 4000, nome: "Skin 100" },
    { src: "/assets/skin200.png", preco: 5000, nome: "Skin 200" },
  ];

  // estado local para mostrar mensagem de compra
  const [msg, setMsg] = useState<string>("");

  const handleClickSkin = (skin: Skin) => {
    if (skin.preco === 0 || gastar(skin.preco)) {
      onSelecionarSkin(skin.src);
      setMsg(`Você comprou a ${skin.nome} por ${skin.preco}$!`);
    } else {
      setMsg("Dinheiro insuficiente!");
    }

    // limpa a mensagem depois de 2 segundos
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-6 p-4 w-1/2">
        <h2 className="text-3xl font-bold">🐟 Animaizinhos do Real</h2>
        <span className="text-lg font-semibold">Saldo: {dinheiro}$</span>
        {msg && <div className="text-yellow-800 font-bold">{msg}</div>}
        <div className="flex flex-wrap justify-center py-10 gap-5">
          {skins.map((skin, i) => {
            const isSelected = selectedAvatar === skin.src;
            return (
              <div
                key={skin.src}
                onClick={() => handleClickSkin(skin)}
                className={`flex flex-col justify-center items-center bg-amber-200 rounded-lg  p-2 shadow-[-4px_4px_#3b3b3b] cursor-pointer active:translate-y-[2px]
                ${isSelected ? "ring-4 ring-offset-2 ring-yellow-400" : ""}`}
              >
                <h4 className="font-bold text-sm py-1">{skin.nome}</h4>
                <img src={skin.src} alt={skin.nome} className="h-40 object-contain" />
                <span className="text-sm font-semibold">{skin.preco}$</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
