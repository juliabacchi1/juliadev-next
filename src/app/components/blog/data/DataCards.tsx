import {
  Flower2,
  Brain,
  Heart,
  Palette,
  Sparkles,
  Rocket,
  BookOpenText,
  Clapperboard,
} from "lucide-react";

import AppsQueInspiram from "../contents/AppsQueInspiram";
import LeiturasNecessarias from "../contents/LeiturasNecessarias";
import SeriesImperdiveis from "../contents/SeriesImperdiveis";
import LadoConsciente from "../contents/LadoConsciente";
import FrontEnd from "../contents/FrontEnd";
import DesignParaDevs from "../contents/DesignParaDevs";
import HeroinasDigitais from "../contents/HeroinasDigitais";
import SaudeMental from "../contents/SaudeMental";

export const DataCards = [
  {
    title: "Apps que inspiram",
    bgColor: "#D8B4F8",
    icon: <Flower2 size={64} />,
    content: <AppsQueInspiram />,
  },
  {
    title: "Leituras necessárias",
    bgColor: "#D8A13A",
    icon: <BookOpenText size={64} />,
    content: <LeiturasNecessarias />,
  },
  {
    title: "Séries imperdíveis",
    bgColor: "#EE5B36",
    icon: <Clapperboard size={64} />,
    content: <SeriesImperdiveis />,
  },
  {
    title: "Desperte o seu lado consciente",
    bgColor: "#93C5FD",
    icon: <Brain size={64} />,
    content: <LadoConsciente />,
  },
  {
    title: "Seja um front-end requisitado",
    bgColor: "#EE5B32",
    icon: <Sparkles size={64} />,
    content: <FrontEnd />,
  },
  {
    title: "Design para desenvolvedores",
    bgColor: "#FCA5A5",
    icon: <Palette size={64} />,
    content: <DesignParaDevs />,
  },
  {
    title: "Heroínas digitais",
    bgColor: "#C4B5FD",
    icon: <Rocket size={64} />,
    content: <HeroinasDigitais />,
  },
  {
    title: "Esse post é sobre saúde mental",
    bgColor: "#F6E3B9",
    icon: <Heart size={64} />,
    content: <SaudeMental />,
  },
];
