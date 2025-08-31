import Image from "next/image";

export default function HeroArea() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative">
          <p className="text-blue text-5xl absolute">PHUNG William</p>
          <h1 className="text-white bold text-huge leading-tight z-10 relative drop-shadow-[4px_16px_0px_var(--light-blue)]">
            Portfolio
          </h1>
          <Image
            className="absolute -top-42 -right-15"
            src="/HeroArea.png"
            alt=""
            width={350}
            height={350}
          />
          <div className="flex justify-center gap-10 text-light-blue">
            <p className="text-5xl">Front End Developer</p>
            <p className="text-5xl">Webdesigner</p>
          </div>
        </div>
      </div>
    </>
  );
}
