import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
import { routes } from "../../../packages/constants/routes";
import { INav } from "../../../packages/interfaces/navigation";
import Navs from "./navigation";
import News from "./news";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
      delay: 0.3
    }
  }
}

const item = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const Navigation = () => {
  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 lg:grid-rows-2 gap-x-8 gap-y-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
    >

      <motion.div
        className="py-4 border-t-[1.5px] border-white w-full row-span-full space-y-4"
        variants={item}
      >
        <h3 className="text-textGrey text-xs capitalize">Navigation</h3>
        <Navs />
      </motion.div>

      <motion.div
        className="py-4 border-t-[1.5px] border-white w-full space-y-4"
        variants={item}
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-textGrey text-xs capitalize">latest news</h3>
          <Nav>newsroom</Nav>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <News
            date="mAY 24, 2022"
            title="Palantir, Trafigura aim to track carbon emissions for the oil, metals industry"
          />
          <News
            date="january 5, 2022"
            title="Palantir, Trafigura aim to track carbon emissions for the oil, metals industry"
            linkName="watch interview"
          />
        </div>
      </motion.div>

      <motion.div
        className="py-4 border-t-[1.5px] border-white w-full space-y-4"
        variants={item}
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-textGrey text-xs capitalize">Offerings</h3>
          <Nav>view all offerings</Nav>
        </div>
      </motion.div>

      <motion.div
        className="py-4 border-t-[1.5px] border-white w-full space-y-4"
        variants={item}
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="text-textGrey text-xs capitalize">latest impact</h3>
          <Nav>view all impact studies</Nav>
        </div>
        <div className="group hover:bg-[#00000000] cursor-pointer transition-all duration-300 w-full min-h-[12.5rem] h-[75%] bg-[#EB673E] border-[#EB673E] border flex flex-col items-start justify-between p-4">
          <h4 className="text-dark text-xs group-hover:text-[#EB673E] transition-all duration-300 uppercase">Text Impact</h4>
          <h1 className="text-4xl text-dark group-hover:text-[#EB673E] transition-all duration-300 uppercase">Swiss Re</h1>
        </div>
      </motion.div>

      <motion.div
        className="py-4 border-t-[1.5px] border-white w-full flex items-start justify-between"
        variants={item}
      >
        <h3 className="text-textGrey text-xs capitalize">quick links</h3>
        <div className="space-y-2 text-left">
          <Nav className="flex items-center space-x-2">
            <span className="font-medium">Blog</span>
            <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Nav>
          <Nav className="flex items-center space-x-2">
            <span className="font-medium">Newsroom</span>
            <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Nav>
          <Nav className="flex items-center space-x-2">
            <span className="font-medium">Letter from the ceo</span>
            <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Nav>
          <Nav className="flex items-center space-x-2">
            <span className="font-medium">Information Security</span>
            <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Nav>
          <Nav className="flex items-center space-x-2">
            <span className="font-medium">Insights</span>
            <div className="-translate-x-2 w-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all text-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Nav>
        </div>
      </motion.div>

    </motion.div>
  )
}

const Nav: FC<INav> = ({ ...props }) => {
  return (
    <Link href={props?.link || routes.home}>
      <div className="group relative text-white uppercase font-light text-xs cursor-pointer w-max">
        <a {...props} >{props.children}</a>
        <div className="w-0 group-hover:w-full transition-all absolute -bottom-1 left-0 h-[1.5px] bg-white" />
      </div>
    </Link>
  )
}

export default Navigation;