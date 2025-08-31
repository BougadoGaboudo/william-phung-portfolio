import Image from "next/image";
import Wrapper from "./Wrapper";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-light-yellow py-20">
        <Wrapper>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 text-blue">
            <Image
              src="/About.svg"
              alt=""
              width={400}
              height={400}
              className="w-80 md:w-96 m-auto"
            />
            <div className="flex flex-col justify-center items-center gap-8 md:gap-0">
              <h1 className="text-white text-9xl drop-shadow-[2px_8px_0px_var(--yellow)] leading-tight">
                About me
              </h1>
              <p className="max-w-md text-lg md:max-w-2xl">
                <span className="text-4xl">Bonjour,</span>
                <br />
                <br />
                Je m’appelle PHUNG William, étudiant à Sorbonne Université en
                licence profesionnelle Projet Web et Mobile à Sorbonne
                Université dès septembre 2025. Je recherche une alternance en
                développement front end. Le webdesign m’intéresse également,
                même si je débute dans ce domaine. d(´▽｀*)
                <br />
                <br />
                Bien que je souhaite me spécialiser en front end, mon BTS SIO
                option SLAM m’a tout de même permis d’acquérir des compétences
                solides en back-end, ce qui me donne une vision globale des
                projets. ( •̀ω •́ゞ) Phrase un peu bateau mais oui, j’aime
                concevoir des interfaces modernes et soignées !
                <br />
                <br />
                PS : L’illustration est également ma passion et mon rêve est de
                devenir illustrateur professionnel un jour !
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
