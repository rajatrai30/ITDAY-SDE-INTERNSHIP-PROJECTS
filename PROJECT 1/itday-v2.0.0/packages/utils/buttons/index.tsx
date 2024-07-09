import { FC } from "react"
import { IButton } from "../../interfaces/utils/button.interface";
import { animate } from "./button.service";


export const Button: FC<IButton> = ({ ...props }) => {

  let classNames = ' outline-none focus:outline-none fonts-prompt font-medium '

  switch (props?.border) {
    case 'bottom':
      classNames += ' border-b '
      break;
    case 'full':
      classNames += props.noRightBorder ? ' border-b border-l border-t' : ' border ';
      break;
    default:
      classNames += ' border-none bg-[#00000000] '
      break;
  }

  switch (props?.theme) {
    case 'dark': {
      if (props?.border) {
        classNames += ' border-[#ffffff] text-[#ffffff] hover:text-[#1E2124] '
      } else {
        classNames += ''
      }
    }
      break;
    case 'light': {
      if (props?.border) {
        classNames += ' border-[#1E2124] text-[#1E2124] group-hover:border-[#1E2124] group-hover:text-[#1E2124] '
      } else {
        classNames += ''
      }
    }
      break;
    default: {
      if (props?.border) {
        classNames += ' border-[#ffffff] text-[#ffffff] '
      } else {
        classNames += ''
      }
    }
      break;
  }

  switch (props?.size) {
    case 'small':
      classNames += !props.shape ? ' px-4 py-1 text-xs ' : ' w-6 h-6 text-xs '
      break;
    case 'big':
      classNames += !props.shape ? ' px-10 py-3 ' : ' w-12 h-12 text-xs '
      break;
    default:
      classNames += !props.shape ? ' px-10 py-2 ' : ' w-10 h-10 '
  }

  if (props?.animatable) {
    animate(props?.transition, props?.transitionDirection)
  }

  if(props.shape) {
    return (
      <button {...props} className={`group relative flex items-center fonts-space-grotesk justify-center overflow-hidden ${classNames} ${props.className} z-0`}>
        {props?.animatable ? <div className={`${props?.theme === "light" ? 'bg-[#1E2124]' : props?.theme === 'dark' ? 'bg-[#ffffff]' : ''} absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 `} /> : <></>}
        <div className={`w-[1rem] h-[1rem] transition-all z-10`}>{props.children}</div>
      </button>
    )
  } else {
    return (
      <button {...props} className={`group w-max relative fonts-space-grotesk overflow-hidden ${classNames} ${props.className} z-0`}>
        {props?.animatable ? <div className={`${props?.theme === "light" ? 'bg-[#1E2124]' : props?.theme === 'dark' ? 'bg-[#ffffff]' : ''} absolute block top-0 left-0 h-full -z-10 transition-all w-0 group-hover:w-full duration-300 `} /> : <></>}
        <span className={`transition-all z-10`}>{props.children}</span>
      </button>
    )
  }
}