import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="h-auto my-16">
      <h2>Projetos</h2>
      <ul className="flex flex-row flex-wrap">
        <li className="flex flex-col items-center">
          <Image
            src={"/images/projects/phone-meta-diaria.png"}
            width={180}
            height={180}
            alt=""
            className="m-8"
          />
          <Link
            href={"https://gule-habit-manager.vercel.app/"}
            className="bg-primary-green text-xl rounded-full py-2 px-4 shadow-lg shadow-neutral-800"
          >
            meta.diária
          </Link>
        </li>
      </ul>
    </section>
  );
}
