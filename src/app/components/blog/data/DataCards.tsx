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
  },
  {
    title: "Séries imperdíveis",
    bgColor: "#EE5B36",
    icon: <Clapperboard size={64} />,
  },
  {
    title: "Desperte o seu lado consciente",
    bgColor: "#93C5FD",
    icon: <Brain size={64} />,
  },
  {
    title: "Seja um front-end requisitado",
    bgColor: "#EE5B32",
    icon: <Sparkles size={64} />,
  },
  {
    title: "Design para desenvolvedores",
    bgColor: "#FCA5A5",
    icon: <Palette size={64} />,
  },
  {
    title: "Heroínas digitais",
    bgColor: "#C4B5FD",
    icon: <Rocket size={64} />,
  },
  {
    title: "Esse post é sobre saúde mental",
    bgColor: "#F6E3B9",
    icon: <Heart size={64} />,
  },
];
