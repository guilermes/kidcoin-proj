import useDinheiro from "../hooks/useDinheiro";

export default function AlunoInfo({ avatar }: { avatar: string }) {
  const { dinheiro } = useDinheiro();

  return (
    <section className="py-10 flex flex-row justify-center items-center gap-10">
      <div>
        <img
          src={avatar}
          alt="Avatar atual do aluno"
          className="img-animation"
        />
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-6 text-center">
          Pedrinho
        </h3>
        <ul className="flex flex-row gap-7 justify-center text-lg">
          <li className="text-center font-bold">
            <span>💰 Dinheirinho</span>
            <br />
            <span className="text-green-700 text-2xl">{dinheiro}$</span>
          </li>
          <li className="text-center font-bold">
            <span className="text-center w-300">🏅 Medalha Atual</span>
            <img
              src="/assets/badge02.png"
              alt="Medalha atual do aluno"
              className="h-40"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
