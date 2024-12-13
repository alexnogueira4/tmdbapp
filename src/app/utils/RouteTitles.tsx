import BackToHome from "@/app/ui/icons/BackToHome";
import { PageTitle } from "@/app/lib/definitions";

const RouteTitles: Record<string, PageTitle> = {
  "/": {
    title: "Pop Movies",
    icon: null,
  },
  "/movie/:id": {
    title: "Movie details",
    icon: <BackToHome />,
  },
};

export default RouteTitles;
