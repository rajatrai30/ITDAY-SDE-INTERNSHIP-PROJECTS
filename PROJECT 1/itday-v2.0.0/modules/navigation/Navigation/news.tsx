import Link from "next/link"
import { FC } from "react"
import { routes } from "../../../packages/constants/routes"
import { INav } from "../../../packages/interfaces/navigation"
import { TurnDownArrowRight } from "../../../packages/utils/icons"

const News = (props: {
  image?: string,
  title: string,
  date: string,
  link?: string,
  linkName?: string
}) => {
  return (
    <div className="space-y-2">
      <h6 className="uppercase text-xs text-textGrey font-light">{props.date}</h6>
      <div className="space-y-4">
        <div className="w-full min-h-[6.5rem] bg-textGrey"></div>
        <h1 className="leading-snug max-text-line-3">{props.title}</h1>
        <div className="flex items-baseline space-x-2">
        <TurnDownArrowRight/>
        <Nav>{props?.linkName || 'read more'}</Nav>
        </div>
      </div>
    </div>
  )
}

const Nav: FC<INav> = ({ ...props }) => {
  return (
    <Link href={props?.link || routes.home}>
      <div className="group relative text-white uppercase font-light text-sm cursor-pointer w-max">
        <a {...props} >{props.children}</a>
        <div className="w-0 group-hover:w-full transition-all absolute bottom-0 left-0 h-[1.5px] bg-white" />
      </div>
    </Link>
  )
}

export default News