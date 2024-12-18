import { NavLink } from "react-router-dom";
import { SideBarLink, SideBarPath } from "../types/router.types";


export const SidebarLinks = (items: SideBarPath[], role: string) => {
  const navLinkRoutes = items.reduce<SideBarLink[]>((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children
          .filter((child) => child.name && child.path)
          .map((child) => ({
            key: child.name!,
            label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
          })),
      });
    }

    return acc;
  }, []);
  return navLinkRoutes;
};
