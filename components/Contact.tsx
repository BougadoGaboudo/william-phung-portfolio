import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <footer className="flex items-center justify-center py-10">
        <div className="flex items-center justify-center gap-16 text-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-white text-5xl drop-shadow-[2px_4px_0px_var(--yellow)] leading-tight">
              Contact
            </h2>
            <p className="text-blue font-bold text-2xl leading-8">
              pwilliampro@gmail.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-white text-5xl drop-shadow-[2px_4px_0px_var(--yellow)] leading-tight">
              Social
            </h2>
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/william-phung-77936a298/"
                target="_blank"
              >
                <Image
                  src="/img/linkedin.png"
                  alt="Linkedin"
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </Link>
              <Link href="https://github.com/BougadoGaboudo/" target="_blank">
                <Image
                  src="/img/github.png"
                  alt="Github"
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
