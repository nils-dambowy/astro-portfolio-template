type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "nils.dambowy@gmail.com",
  title: "Hi, I’m Nils 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *Computer Science* student at TU Darmstadt. I am currently focusing on developing my knowledge in the areas of *AI* and *web-development.*",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nils-dambowy-6a2584249/",
    },
    {
      label: "Github",
      link: "https://github.com/nils-dambowy",
    },
  ],
};

export default presentation;
