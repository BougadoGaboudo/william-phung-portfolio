import Image from "next/image";

export default function HeroArea() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-light-yellow to-yellow">
        <div className="relative">
          <p className="text-blue text-[clamp(1.5rem,1.1538rem+1.5385vw,3rem)] absolute -top-4 md:-top-0">
            PHUNG William
          </p>
          <h1 className="text-white bold text-huge leading-tight z-10 relative drop-shadow-[0.03em_0.06em_0_var(--light-blue)] mx-auto w-max">
            Portfolio
          </h1>
          <Image
            className="absolute -top-25 -right-7 w-[11rem] md:-top-42 md:-right-15 md:w-[22rem]"
            src="/img/HeroArea.png"
            alt=""
            width={352}
            height={352}
          />
          <div className="flex justify-center items-center md:gap-10 text-light-blue flex-col md:flex-row">
            <p className="text-[clamp(1.5rem,1.1538rem+1.5385vw,3rem)]">
              Front End Developer
            </p>
            <p className="text-[clamp(1.5rem,1.1538rem+1.5385vw,3rem)]">
              Webdesigner
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
