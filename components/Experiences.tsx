export default function Experiences() {
  return (
    <>
      <div className="flex flex-col gap-6 bg-light-yellow pt-6 pb-12 px-12 rounded-tr-[4rem] rounded-tl-xl rounded-br-xl rounded-bl-[4rem] w-full max-w-md md:w-1/2 mx-auto md:mx-0">
        <h1 className="text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight">
          Experiences
        </h1>
        <div className="border-l-8 border-light-blue pl-4 rounded-sm">
          <p className="text-blue text-lg">déc 2024 / janv 2025 · 2 mois</p>
          <h6 className="text-blue text-2xl">Développeur Full Stack</h6>
          <p className="text-blue text-lg">
            LambdaLabs · Stage
            <br />- Job board (projet from scratch) en Next.js, TypeScript,
            Tailwind CSS, Mongoose et MongoDB
            <br />- Méthode agile : Daily Meeting, Jira et GitHub
            <br />- Tâches : Création de composants React, SSR, Metadata,
            Internationalisation, API CRM, Model Log, Cron
          </p>
        </div>
        <div className="border-l-8 border-light-blue pl-4 rounded-sm">
          <p className="text-blue text-lg">mai 2024 / juil 2024 · 2 mois</p>
          <h6 className="text-blue text-2xl">Développeur Front End</h6>
          <p className="text-blue text-lg">
            LambdaLabs · Stage
            <br />- Job board en Next.js, SCSS, Prisma et MySQL
            <br />- Méthode agile : Daily Meeting, Jira et GitHub
            <br />- Tâches : Création de composants React, utilisation de la
            bibliothèque Recharts, exploitation d’API (HubSpot)
          </p>
        </div>
      </div>
    </>
  );
}
