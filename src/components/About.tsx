import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex flex-wrap items-center h-screen">
      <div className="mr-16">
        <Image
          src={"/images/guleDev.jpeg"}
          width={320}
          height={320}
          alt="Foto do Gustavo Pampu"
          className="rounded-3xl"
        />
      </div>
      <div className="flex flex-col xl:h-80 xl:w-6/12">
        <h2>Sobre mim</h2>
        <div className="text-pretty">
          <p>
            Comecei minha jornada na programação em 2023, quando ingressei na
            faculdade de Eng. de Software no UniSenai, de lá pra cá venho me
            apaixonando cada vez mais pela programação.
          </p>
          <p>
            Atualmente, além da faculdade, estou estudando linguagens/frameworks
            como: JavaScript, TypeScript, React, NextJS entre outras tecnologias
            que uso para a criar aplicações web/mobile.
          </p>
          <p>
            Meu foco é aprender novas coisas e aprimorar ainda mais as hablidade
            que possuo, gosto sempre de estar em constante aprendizado e evoluindo
            dia após dia.
          </p>
        </div>
      </div>
    </section>
  );
}
