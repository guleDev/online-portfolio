import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <div>
        <h2>Entrar em contato</h2>
        <p className="mt-0">Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className="mb-4">
        <li className="flex gap-2 p-2">
          <Image
            src={"/images/contacts/email.svg"}
            width={32}
            height={32}
            alt="Email"
          />
          gulepampu@gmail.com
        </li>
        <li >
          <Link href={"https://wa.me/5541991957888"} target="_blank" className="flex gap-4 p-2">
            <Image
              src={"/images/contacts/whatsapp.svg"}
              width={32}
              height={32}
              alt="Whatsapp"
            />
            +55 (41) 9 9195-7888
          </Link>
        </li>
      </ul>
      <ul className="flex pl-2 pb-2 gap-4">
        <li>
          <Link
            href={"https://www.linkedin.com/in/gustavo-pampu-90b23b268/"}
            target="_blank"
          >
            <Image
              src={"/images/contacts/linkedin.svg"}
              width={40}
              height={40}
              alt="Instagram"
            />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/guleDev"} target="_blank">
            <Image
              src={"/images/contacts/github.svg"}
              width={40}
              height={40}
              alt="Instagram"
            />
          </Link>
        </li>
        <li>
          <Link href={"https://www.instagram.com/gule.pampu"} target="_blank">
            <Image
              src={"/images/contacts/instagram.svg"}
              width={40}
              height={40}
              alt="Instagram"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
