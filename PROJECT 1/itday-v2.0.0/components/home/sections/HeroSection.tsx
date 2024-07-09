import { mainTitle } from "../../../packages/constants"
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.025
    }
  }
}

const characterAnimation = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

const HeroSection = () => {
  return (
    <div className="py-16 lg:max-w-[92vw] 2xl:max-w-[1500px] mx-auto">
      <motion.h1
        className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] leading-none  fonts-space-grotesk"
        variants={container}
        initial="hidden"
        animate="visible"
      >{mainTitle.split('').map((char, index) => (
        <motion.span
          key={index + char}
          variants={characterAnimation}
          transition={{ duration: 0.3 }}
        >
          {char}
        </motion.span>
      ))}</motion.h1>
    </div>
  )
}

export default HeroSection