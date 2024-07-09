import { HTMLAttributes } from "react";

export interface INav extends HTMLAttributes<HTMLAnchorElement>{
  children: JSX.Element | JSX.Element[] | string,
  link?: string
}