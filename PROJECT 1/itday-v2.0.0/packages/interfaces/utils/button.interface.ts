import { ButtonHTMLAttributes } from "react";

export type _theme = 'light' | 'dark' | 'custom';
export type _size = 'small' | 'big' | 'medium';
export type _border = 'full' | 'bottom';
export type _transition = 'line-through' | 'background';
export type _transitionDirection = 'left-right' | 'right-left' | 'top-bottom' | 'bottom-top' | 'fade'
export type _shape = 'square' | 'circle' | 'rounded-square' | 'rounded-rectangle' 

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | JSX.Element[] | string,
  fullWidth?: boolean,
  theme?: _theme,
  border?: _border,
  size?: _size,
  animatable?: boolean,
  transition?: _transition,
  transitionDirection?: _transitionDirection,
  shape?: _shape,
  noRightBorder?: boolean
}