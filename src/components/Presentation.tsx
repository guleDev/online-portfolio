import Link from "next/link";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="flex justify-around w-6/12">
      <div className="flex flex-col h-screen items-center justify-center">
        <h1>Gustavo Pampu</h1>
        <span className="type-presentation"></span>
        <ul className="flex flex-wrap gap-8">
          <li>
            <Link href={"#about"} className="hover:text-[#626866]">
              {"<Sobre>"}
            </Link>
          </li>
          <li>
            <Link href={"#projects"} className="hover:text-[#626866]">{"<Projetos>"}</Link>
          </li>
          <li>
            <Link href={"#contact"} className="hover:text-[#626866]">{"<Contato>"}</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/avatar-IA.jpeg"}
          width={240}
          height={240}
          alt="Avatar gule. By Copilot"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
