import { PageTitle } from "@/app/lib/definitions";
import RouteTitles from "./RouteTitles";

const getRouteTitle = (pathname: string): PageTitle => {
  const normalizedPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  if (RouteTitles[normalizedPathname]) {
    return RouteTitles[normalizedPathname];
  }

  for (const route in RouteTitles) {
    const routeSegments = route.split("/");
    const pathSegments = normalizedPathname.split("/");

    if (
      routeSegments.length === pathSegments.length &&
      routeSegments.every((segment, index) => {
        return segment === ":id" || segment === pathSegments[index];
      })
    ) {
      return RouteTitles[route];
    }
  }

  return RouteTitles["/"];
};

export default getRouteTitle;
