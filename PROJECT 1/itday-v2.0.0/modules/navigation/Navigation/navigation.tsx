import Link from "next/link";
import { routes } from "../../../packages/constants/routes";
import { TurnDownArrowRight } from "../../../packages/utils/icons";

const Navigation = () => {
  return (
    <nav className="flex flex-col space-y-3">
      <Nav>Generate Alpha</Nav>
      <Nav>Our Platforms</Nav>
      <Nav>
        <TurnDownArrowRight />
        <span>Fountry</span>
      </Nav>
      <Nav>
        <TurnDownArrowRight />
        <span>gotham</span>
      </Nav>
      <Nav>
        <TurnDownArrowRight />
        <span>apollo</span>
      </Nav>
      <Nav>Offerings</Nav>
      <Nav>Impact Studies</Nav>
      <Nav>Careers</Nav>
      <Nav>About iTDAY</Nav>
    </nav>
  )
}

const Nav = (props: {
  link?: string,
  children: JSX.Element | JSX.Element[] | string,
  className?: string
}) => {
  return (
    <Link href={props?.link || routes.home}>
      <a {...props} className={'text-[2rem] hover:opacity-75 transition-all  flex space-x-2 tracking-wide' + ' ' + props.className}>{props.children}</a>
    </Link>
  )
}

export default Navigation;