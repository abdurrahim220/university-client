import { RouteType, SideBarPath } from "../types/router.types";

export const routerGenerator = (items: SideBarPath[]) => {
  const routes = items.reduce<RouteType[]>((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({ path: child.path!, element: child.element });
      });
    }
    return acc;
  }, []);
  return routes;
};
