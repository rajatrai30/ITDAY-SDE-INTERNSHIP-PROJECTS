import { createElement, FC, HTMLAttributes } from "react";

interface IEvenToLeftTitle extends HTMLAttributes<HTMLHeadingElement>{
  children: string
}

export const EvenToLeftTitle: FC<IEvenToLeftTitle> = ({ children, ...props}) => {

  return createElement(
    "h3",
    {
      className: 'lg:ml-[5rem] capitalize' + ' ' + props.className
    },
    children
  )
}