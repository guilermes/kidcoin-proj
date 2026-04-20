"use client";

import Footer from "../components/Footer";
import NavbarAluno from "../components/NavbarAluno";

interface CellContent {
  id: number;
  content?: React.ReactNode; // pode ser texto, imagem, ícone, etc
}

export default function Mapa() {
  // Cria 28 células (7x4)
  const gridData: CellContent[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    content:
      i === 0 ? <img src="assets/centy.png" alt="Avatar" className="h-50 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" /> :
      i === 4 ? <img src="assets/kid-bank.png" alt="Avatar" className="h-50 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" /> :
      i === 15 ? <img src="assets/pig-fonte.png" alt="Avatar" className="h-45 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" /> :
      i === 7 ? <img src="assets/loja-skins.png" alt="Avatar" className="h-50 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" /> :
      i === 1 ? <div className="border-b-2 border-dashed border-gray-800 w-4/5"></div>:
      i === 2 ? <div className="border-b-2 border-dashed border-gray-800 w-4/5"></div>:
      i === 3 ? <div className="border-b-2 border-dashed border-gray-800 w-4/5"></div>:
      i === 4 ? <div className="border-b-2 border-dashed border-gray-800 w-4/5"></div>:
      i === 6 ? <div className="border-b-2 border-dashed border-gray-800 w-4/5"></div>:
      i === 10 ? <div className="border-r-2 border-dashed border-gray-800 h-4/5"></div>:
      i === 8 ? <div className="border-b-2 border-dashed border-gray-800 w-4/5"></div>:


      i === 9 ? 
      <div className="flex flex-wrap w-full h-full">
        <div className="border-r-2 border-b-2 border-dashed w-2/4 h-1/2 border-gray-800"></div>
        <div className="w-1/2 h-1/2 border-gray-800"></div>
        <div className="w-1/2 h-1/2 border-gray-800"></div>
        <div className="w-1/2 h-1/2 border-gray-800"></div>
      </div>:
      
       i === 5 ? 
      <div className="flex flex-wrap w-full h-full">
        <div className="w-1/2 h-1/2 border-gray-800"></div>
        <div className="w-1/2 h-1/2 border-gray-800"></div>
        <div className="w-1/2 h-1/2 border-gray-800"></div>
        <div className="border-l-2 border-t-2 border-dashed w-1/2 h-1/2 border-gray-800"></div>
      </div>:


      



      undefined, // vazio
  }));

  const handleClick = (cell: CellContent) => {
    console.log(`Clicou na célula ${cell.id + 1}`);
  };

  return (
    <><NavbarAluno />
    <h2 className=" text-4xl text-(--primary-font-color) text-center font-bold p-6">Bem vindo a sua primeira aventura</h2>
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-2xl">
        <div className="grid grid-cols-5 grid-rows-4 ">
          {gridData.map((cell) => (
            <button
              key={cell.id}
              onClick={() => handleClick(cell)}
              className={`flex items-center justify-center h-50 w-60 rounded-lg overflow-visible`}
            >
              {cell.content}
            </button>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
