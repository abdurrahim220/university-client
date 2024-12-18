// src/types/route.types.ts
import { ReactNode } from "react";

export type SideBarPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: SideBarPath[];
};

export type RouteType = {
  path: string;
  element: ReactNode;
};


export type SideBarLink = {
  key: string;
  label: ReactNode;
  children?: SideBarLink[];
};