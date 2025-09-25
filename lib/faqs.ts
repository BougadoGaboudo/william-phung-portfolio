type Faq = {
  question: string;
  answer: string | string[];
};

export const faqs: Faq[] = [
   {question: "Que recherches-tu ?",
    answer: "Actuellement, je recherche une alternance en développement front end (rythme 2 semaines université / 2 semaines entreprise)."
   }, 
   {
       question: "As-tu déjà travaillé en équipe ?",
       answer:
       "Lors de mes stages, j'ai collaboré avec des développeurs fullstack sur des projets de startups, en utilisant des outils comme Jira pour la méthode Agile ou encore GitHub pour le versioning et la review de code.",
    },
    {
        question: "As-tu des notions en back end ?",
        answer:
        "De part mon BTS SIO option SLAM, on peut me considérer comme un développeur fullstack en terme de compétences. J'ai appris à utiliser des technologies comme PHP, Next.js, MySQL, PostgreSQL, MongoDB, Prisma, Mongoose et j'en passe. Mais il est tout de même important pour moi de préciser que je préfère très largement le front end !",
    },
    {
      question: "Pourquoi être passé de l'illustration au développement ?",
      answer:
        "L'illustration est un domaine très élitiste et pour l'instant, je ne suis pas assez bon pour le monde professionnel. Enfin, en toute honnête, je pourrais très bien me lancer dans des missions plutôt modestes mais ce n'est pas mon but et de toute manière, mon niveau ne me satisfait pas. Je dois être capable d'être fier de mes oeuvres avant de franchir le pas.",
    },
  {question: "Où peut-on voir tes illustrations ?",
    answer: ["Allez sur le lien du projet \"Portfolio Bougado\" et vous verrez mes illustrations !",
        "Plus tard, je compte réaliser un nouveau site qui sera entièrement dédié à mes illustrations. Ca me fera un portfolio 100% dev (celui où vous êtes) et un portfolio 100% illu !",
        "PS : Lorsque vous serez dans la galerie d'illustrations, si la première ligne de la galerie ne semble pas alignée horizontalement, cela veut dire que certaines illustrations n'ont pas été chargées. Pour afficher toutes les illustrations, il suffit de cliquer sur une autre section de la navbar (\"About\" par exemple) et revenir dans \"Gallery\". Je n'ai pas encore réussi à corriger (dans le code) ce problème à ce jour. :("
    ]
  }
];
