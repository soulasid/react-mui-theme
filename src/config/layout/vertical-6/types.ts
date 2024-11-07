import { ReactNode } from "react";

export interface HeaderProps {
  height: number;
}

export interface SidebarProps {
  width: number;
  open: boolean;
  onToggle: () => void;
}

export interface NavSectionProps {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  path?: string;
  icon?: ReactNode;
  info?: ReactNode;
  children?: NavItem[];
  disabled?: boolean;
  active?: boolean;
}

export interface NavItemProps {
  item: NavItem;
  level?: number;
}

export interface MainProps {
  children?: ReactNode;
}
