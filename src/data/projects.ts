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
    title: "Investment Calculator",
    techs: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/nils-dambowy/InvestmentCalculator",
  },
  {
  title: "openbouldermap",
  techs: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Leaflet"],
  link: "https://github.com/nils-dambowy/openbouldermap",
  }
];

export default projects;
