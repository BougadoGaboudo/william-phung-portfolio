export default function Education() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-light-yellow pt-6 pb-12 px-12 rounded-tr-xl rounded-tl-[4rem] rounded-br-[4rem] rounded-bl-xl w-full max-w-md md:w-1/2 mx-auto md:mx-0">
        <h1 className="text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight">
          Education
        </h1>
        <div className="border-l-8 border-light-blue pl-4 rounded-sm">
          <p className="text-blue text-lg">2025 / 2026</p>
          <h6 className="text-blue text-2xl">
            Licence professionnelle Projet Web et Mobile
          </h6>
          <p className="text-blue text-lg">Sorbonne Université - 75005 Paris</p>
        </div>
        <div className="border-l-8 border-light-blue pl-4 rounded-sm">
          <p className="text-blue text-lg">2023 / 2025</p>
          <h6 className="text-blue text-2xl">BTS SIO option SLAM</h6>
          <p className="text-blue text-lg">Lycée Turgot - 75003 Paris</p>
        </div>
        <div className="border-l-8 border-light-blue pl-4 rounded-sm">
          <p className="text-blue text-lg">2019 / 2023</p>
          <h6 className="text-blue text-2xl">
            Formation à distance d’illustration
          </h6>
          <p className="text-blue text-lg">EDAA - 51100 Reims</p>
        </div>
        <div className="border-l-8 border-light-blue pl-4 rounded-sm">
          <p className="text-blue text-lg">2017/2019</p>
          <h6 className="text-blue text-2xl">Bac STI2D option EE</h6>
          <p className="text-blue text-lg">
            Lycée Galilée - 92230 Gennevilliers
          </p>
        </div>
      </div>
    </>
  );
}
