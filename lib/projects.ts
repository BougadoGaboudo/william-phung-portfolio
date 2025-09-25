type Project = {
  title: string;
  img: string;
  description: string | string[];
  stacks: { name: string; img: string }[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Bougado Shop",
    img: "/img/appliIllu.jpg",
    description: [
      "Application web réalisé pour l'épreuve E6 de 2ème année en BTS SIO SLAM.",
      "- Contexte 1 : Shop d'illustrations",
      "- Contexte 2 : Système de Commissions",
      "- Système de rôle utilisateur (client / admin) géré par le middleware impliquant une gestion des illustrations et des commissions",
    ],
    stacks: [
      { name: "Next.js", img: "/img/nextjs.svg" },
      { name: "SCSS", img: "/img/scss.png" },
      { name: "MySQL", img: "/img/mysql.png" },
      { name: "Isotope", img: "/img/isotope.png" },
      { name: "Prisma", img: "/img/prisma.png" },
      { name: "Git", img: "/img/git.png" },
    ],
    url: "https://github.com/BougadoGaboudo/application-illustration",
  },
  {
    title: "FreeJobs",
    img: "/img/freejobs.JPG",
    description: [
      "Participation au développement de l'application web FreeJobs chez Lambda-Labs en tant que Développeur Full stack pendant mon stage de 2ème année en BTS SIO SLAM.",
      "- Job board, projet from scratch",
      "- Méthode agile : Daily Meeting, Jira et GitHub",
      "- Tâches : Création de composants React, SSR, Metadata, Internationalisation, API CRM, Model Log, Cron",
    ],
    stacks: [{name:"Next.js", img: "/img/nextjs.svg"}, {name:"TypeScript", img: "/img/typescript.png"}, {name:"Tailwind CSS", img: "/img/tailwindcss.png"}, {name:"MongoDB", img: "/img/mongodb.svg"}, {name:"Mongoose", img: "/img/mongoose.png"}, {name:"GitHub", img: "/img/github.png"}, {name:"Jira", img: "/img/jira.png"}],
    url: "https://free-jobs.fr/",
  },
  {
    title: "Portfolio Bougado",
    img: "/img/portfolioIlluDev.jpg",
    description: "Mon précédent portfolio",
    stacks: [
      { name: "React", img: "/img/react.png" },
      { name: "SCSS", img: "/img/scss.png" },
      { name: "Isotope", img: "/img/isotope.png" },
    ],
    url: "https://bougado-gaboudo-portfolio.vercel.app/",
  },
  {
    title: "PointerJobs",
    img: "/img/pointerjobs.jpg",
    description: [
      "Participation au développement de l'application web PointerJobs chez Lambda-Labs en tant que Développeur Front end pendant mon stage de 1ère année en BTS SIO SLAM.",
      "- Job board en Next.js, SCSS, Prisma et MySQL",
      "- Méthode agile : Daily Meeting, Jira et GitHub",
      "- Tâches : Création de composants React, utilisation de la bibliothèque Recharts, exploitation d'API (HubSpot)",
    ],
    stacks: [{name:"Next.js", img: "/img/nextjs.svg"}, {name:"SCSS", img: "/img/scss.png"}, {name:"MySQL", img: "/img/mysql.png"}, {name:"Prisma", img: "/img/prisma.png"}, {name:"Git", img: "/img/git.png"}],
    url: "https://www.pointer-jobs.com/",
  },
   {
    title: "Site vitrine FS Agency",
    img: "/img/vitrine.jpg",
    description:
    "Projet web réalisé à partir de la formation du youtuber From Scratch - Création de petites animations JS.",
    stacks: [{name:"React", img: "/img/react.png"}, {name:"SCSS", img: "/img/scss.png"}],
    url: "https://bougado-react-site-vitrine-dev.vercel.app/",
  },
  {
    title: "Crypto Watch",
    img: "/img/cryptowatch.jpg",
    description:
      "Projet web réalisé à partir de la formation du youtuber From Scratch - Appel d'API pour des cryptomonnaies / Utilisation de Recharts et Redux.",
    stacks: [{name:"React", img: "/img/react.png"}, {name:"SCSS", img: "/img/scss.png"}, {name:"Recharts", img: "/img/recharts.png"}, {name:"Redux", img: "/img/redux.svg"}],
    url: "https://bougado-react-crypto-watch-dev.vercel.app/",
  },
  {
    title: "React Cook",
    img: "/img/cook.jpg",
    description:
      "Projet web réalisé à partir de la formation du youtuber From Scratch - Appel d'API pour des recettes de cuisine.",
    stacks: [{name:"React", img: "/img/react.png"}, {name:"SCSS", img: "/img/scss.png"}],
    url: "https://bougado-react-cook-dev.vercel.app/",
  },
  {
    title: "React Flag",
    img: "/img/flag.jpg",
    description:
      "Projet web réalisé à partir de la formation du youtuber From Scratch - Appel d'API pour des drapeaux de pays.",
    stacks : [{name:"React", img: "/img/react.png"}, {name:"SCSS", img: "/img/scss.png"}],
    url: "https://bougado-1er-cours-react-prod.vercel.app/",
  },
  {
    title: "PokeDaily - MVC",
    img: "/img/pokedaily.JPG",
    description:
      "Mon troisième site réalisé dans le cadre de mon BTS SIO SLAM avec pour contexte la structure MVC.",
    stacks : [{name:"HTML", img: "/img/html.png"}, {name:"CSS", img: "/img/css.png"}, {name:"JavaScript", img: "/img/javascript.png"}, {name: "PHP", img: "/img/php.png"}, {name:"GitHub", img: "/img/github.png"}],
    url: "https://github.com/BougadoGaboudo/SiteMVC",
  },
  {
    title: "Arcane - Accessibilité",
    img: "/img/arcane.JPG",
    description:
      "Mon deuxième site réalisé dans le cadre de mon BTS SIO SLAM avec pour contexte l'accessibilité numérique.",
    stacks: [{name:"HTML", img: "/img/html.png"}, {name:"CSS", img: "/img/css.png"}, {name:"JavaScript", img: "/img/javascript.png"}, {name:"GitHub", img: "/img/github.png"}], 
    url: "https://bougadogaboudo.github.io/SiteAccess/",
  },
  {
    title: "Mon premier site web",
    img: "/img/perso.JPG",
    description:
      "Mon tout premier site réalisé dans le cadre de mon BTS SIO SLAM.",
    stacks: [{name:"HTML", img: "/img/html.png"}, {name:"CSS", img: "/img/css.png"}],
    url: "https://bougadogaboudo.github.io/Mon-premier-site/",
  },
];
