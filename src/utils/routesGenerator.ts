import { ReactNode } from "react";

type AdminRoute = {
  path: string;
  element: ReactNode;
};

type TRouterPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TRouterPath[];
};

export const routerGenerator = (items: TRouterPath[]) => {
  const routes = items.reduce<AdminRoute[]>((acc, item) => {
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
