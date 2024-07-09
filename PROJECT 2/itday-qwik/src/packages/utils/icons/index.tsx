// import { component$ } from "@builder.io/qwik"

// export const TurnDownArrowRight = component$(() => {
//     return (
//       <svg width="17" height="20" viewBox="0 0 17 20" fill="black" stroke="1rem" xmlns="http://www.w3.org/2000/svg">
//         <path d="M16.3536 16.3536C16.5488 16.1583 16.5488 15.8417 16.3536 15.6464L13.1716 12.4645C12.9763 12.2692 12.6597 12.2692 12.4645 12.4645C12.2692 12.6597 12.2692 12.9763 12.4645 13.1716L15.2929 16L12.4645 18.8284C12.2692 19.0237 12.2692 19.3403 12.4645 19.5355C12.6597 19.7308 12.9763 19.7308 13.1716 19.5355L16.3536 16.3536ZM0 16.5H16V15.5H0V16.5Z" fill="#fafafa" />
//         <line x1="0.5" y1="16" x2="0.5" stroke="#fafafa" />
//       </svg>
//     )
// }

// export const TurnDownArrowRightLight = component$(() => {
//     return (
//       <svg width="17" height="20" viewBox="0 0 17 20" fill="black" stroke="1rem" xmlns="http://www.w3.org/2000/svg">
//         <path d="M16.3536 16.3536C16.5488 16.1583 16.5488 15.8417 16.3536 15.6464L13.1716 12.4645C12.9763 12.2692 12.6597 12.2692 12.4645 12.4645C12.2692 12.6597 12.2692 12.9763 12.4645 13.1716L15.2929 16L12.4645 18.8284C12.2692 19.0237 12.2692 19.3403 12.4645 19.5355C12.6597 19.7308 12.9763 19.7308 13.1716 19.5355L16.3536 16.3536ZM0 16.5H16V15.5H0V16.5Z" fill="#1E2124" />
//         <line x1="0.5" y1="16" x2="0.5" stroke="#1E2124" />
//       </svg>
//     )
// }

export const TurnDownArrowRight = () => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3536 3.64645C16.5488 3.84171 16.5488 4.15829 16.3536 4.35355L13.1716 7.53553C12.9763 7.7308 12.6597 7.7308 12.4645 7.53553C12.2692 7.34027 12.2692 7.02369 12.4645 6.82843L15.2929 4L12.4645 1.17157C12.2692 0.976311 12.2692 0.659728 12.4645 0.464466C12.6597 0.269204 12.9763 0.269204 13.1716 0.464466L16.3536 3.64645ZM0 3.5H16V4.5H0V3.5Z"
        fill="#767676"
      />
      <line
        y1="-0.5"
        x2="16"
        y2="-0.5"
        transform="matrix(0 1 1 0 1 4)"
        stroke="#767676"
      />
    </svg>
  );
};

export const Search = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.211267 14.9325L3.94779 11.7731C3.10425 10.542 2.5978 9.01733 2.5978 7.36124C2.5978 3.30247 5.60413 0 9.29914 0C12.994 0 16 3.30237 16 7.36124C16 11.4201 12.9942 14.722 9.29914 14.722C7.50244 14.722 5.87223 13.937 4.66752 12.6681L0.873264 15.8761C0.774295 15.9599 0.658254 16 0.542758 16C0.380229 16 0.219154 15.9202 0.112737 15.7678C-0.0699501 15.5065 -0.026001 15.1325 0.211164 14.9324L0.211267 14.9325ZM9.29886 13.5303C12.3958 13.5303 14.9147 10.7631 14.9147 7.3615C14.9147 3.9596 12.3956 1.19215 9.29886 1.19215C6.20193 1.19215 3.68257 3.9599 3.68257 7.3615C3.68257 10.7634 6.2022 13.5303 9.29886 13.5303Z"
        fill="#1E2124" className="fill-[#1E2124] dark:fill-[#f1f1f1]"
      />
    </svg>
  );
};

export const Bars = () => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5"
        y1="0.5"
        x2="19.5"
        y2="0.5"
        stroke="#1E2124"
        stroke-linecap="round"
        className="stroke-[#1E2124] dark:stroke-[#f1f1f1]"
      />
      <line
        x1="0.5"
        y1="12.5"
        x2="19.5"
        y2="12.5"
        stroke="#1E2124"
        stroke-linecap="round"
        className="stroke-[#1E2124] dark:stroke-[#f1f1f1]"
      />
    </svg>
  );
};

export const Cross = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="14.4355"
        x2="14.435"
        y2="1.00044"
        stroke="black"
        stroke-linecap="round"
        className="stroke-[#1E2124] dark:stroke-[#f1f1f1]"
      />
      <line
        x1="1.70711"
        y1="1"
        x2="15.1421"
        y2="14.435"
        stroke="black"
        stroke-linecap="round"
        className="stroke-[#1E2124] dark:stroke-[#f1f1f1]"
      />
    </svg>
  );
};

export const RightArrow = () => {
  return (
    <svg
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
        className="fill-[#1E2124] dark:fill-[#f1f1f1]"
      />
    </svg>
  );
};

export const TurnDownArrowRightLight = () => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="black"
      stroke="1rem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3536 16.3536C16.5488 16.1583 16.5488 15.8417 16.3536 15.6464L13.1716 12.4645C12.9763 12.2692 12.6597 12.2692 12.4645 12.4645C12.2692 12.6597 12.2692 12.9763 12.4645 13.1716L15.2929 16L12.4645 18.8284C12.2692 19.0237 12.2692 19.3403 12.4645 19.5355C12.6597 19.7308 12.9763 19.7308 13.1716 19.5355L16.3536 16.3536ZM0 16.5H16V15.5H0V16.5Z"
        className="fill-[#1E2124] dark:fill-[#f1f1f1]"
      />
      <line
        x1="0.5"
        y1="16"
        x2="0.5"
        className="stroke-[#1E2124] dark:stroke-[#f1f1f1]"
      />
    </svg>
  );
};

// export const TurnDownArrowRightBlack = () => {
//   return (
//     <svg
//       width="17"
//       height="20"
//       viewBox="0 0 17 20"
//       fill="black"
//       stroke="1rem"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M16.3536 16.3536C16.5488 16.1583 16.5488 15.8417 16.3536 15.6464L13.1716 12.4645C12.9763 12.2692 12.6597 12.2692 12.4645 12.4645C12.2692 12.6597 12.2692 12.9763 12.4645 13.1716L15.2929 16L12.4645 18.8284C12.2692 19.0237 12.2692 19.3403 12.4645 19.5355C12.6597 19.7308 12.9763 19.7308 13.1716 19.5355L16.3536 16.3536ZM0 16.5H16V15.5H0V16.5Z"
//         fill="black"
//       />
//       <line y1="-0.5" x2="16" y2="-0.5" stroke="black" transform="matrix(0 1 1 0 1 4)"/>
//     </svg>
//   );
// };

export const TurnUpArrowRightBlack = () => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3536 3.64645C16.5488 3.84171 16.5488 4.15829 16.3536 4.35355L13.1716 7.53553C12.9763 7.7308 12.6597 7.7308 12.4645 7.53553C12.2692 7.34027 12.2692 7.02369 12.4645 6.82843L15.2929 4L12.4645 1.17157C12.2692 0.976311 12.2692 0.659728 12.4645 0.464466C12.6597 0.269204 12.9763 0.269204 13.1716 0.464466L16.3536 3.64645ZM0 3.5H16V4.5H0V3.5Z"
        className="fill-[#1E2124] dark:fill-[#f1f1f1]"
      />
      <line
        y1="-0.5"
        x2="16"
        y2="-0.5"
        transform="matrix(0 1 1 0 1 4)"
        className="stroke-[#1E2124] dark:stroke-[#f1f1f1]"
      />
    </svg>
  );
};

export const TurnDownSecArrow = () => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3536 3.64645C16.5488 3.84171 16.5488 4.15829 16.3536 4.35355L13.1716 7.53553C12.9763 7.7308 12.6597 7.7308 12.4645 7.53553C12.2692 7.34027 12.2692 7.02369 12.4645 6.82843L15.2929 4L12.4645 1.17157C12.2692 0.976311 12.2692 0.659728 12.4645 0.464466C12.6597 0.269204 12.9763 0.269204 13.1716 0.464466L16.3536 3.64645ZM0 3.5H16V4.5H0V3.5Z"
        className="fill-[#767676] "
      />
      <line
        y1="-0.5"
        x2="16"
        y2="-0.5"
        transform="matrix(0 1 1 0 1 4)"
        className="stroke-[#767676]"
      />
    </svg>
  );
};

export const ArrowUpRight = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.98528 0.999093C9.98528 0.722951 9.76142 0.499094 9.48528 0.499094L4.98528 0.499094C4.70914 0.499094 4.48528 0.722952 4.48528 0.999094C4.48528 1.27524 4.70914 1.49909 4.98528 1.49909L8.98528 1.49909L8.98528 5.49909C8.98528 5.77524 9.20914 5.99909 9.48528 5.99909C9.76142 5.99909 9.98528 5.77524 9.98528 5.49909L9.98528 0.999093ZM1.35355 9.83793L9.83883 1.35265L9.13173 0.64554L0.646447 9.13082L1.35355 9.83793Z"
        fill="#1E2124" className="fill-[#1E2124] dark:fill-[#f1f1f1]"
      />
    </svg>
  );
};

export const CircleAngularArrowRight = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#1E2124" />
      <path d="M24 20L17 13" stroke="#767676" stroke-miterlimit="10" />
      <path d="M24 19.5L17 26.5" stroke="#767676" stroke-miterlimit="10" />
    </svg>
  );
};

export const CircleAngularArrowLeft = () => {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#1E2124" />
      <path d="M1 8L8 1" stroke="#767676" stroke-miterlimit="10" />
      <path d="M1 7.5L8 14.5" stroke="#767676" stroke-miterlimit="10" />
    </svg>
  );
};
