import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { createElement, FC, HTMLAttributes } from "react"

interface ILinkButton extends HTMLAttributes<HTMLButtonElement>{

}

export const LinkButton: FC<ILinkButton> = ({children, ...props}) => {
  return createElement(
    "button",
    {
      className: 'group relative flex text-base items-center space-x-4' + ' ' + props.className
    },
    <>
      {children}
      <div className="absolute -bottom-2 -left-4 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
    </>
  )
}