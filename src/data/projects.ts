export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Implementing Neural Style Transfer using the VGG-19 model",
    techs: ["Deep Learning", "Python", "PyTorch"],
    link: "https://github.com/nils-dambowy/Neural-Style-Transfer",
  },
  {
    title: "JavaScript Weather App",
    techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/nils-dambowy/JSWeatherApp",
  },
  {
    title: "JavaScript Todo List",
    techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/nils-dambowy/JavaScriptToDoList",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro", "TypeScript"],
    link: "https://github.com/MaeWolff/astro-portfolio-template",
    isComingSoon: true,
  },
];

export default projects;
