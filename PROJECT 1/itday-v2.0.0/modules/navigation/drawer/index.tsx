const Drawer = (props: {
  open: boolean,
  children: JSX.Element | JSX.Element[] | string
}) => {
  return (
    <div {...props} className={`${props.open ? 'h-screen' : 'h-0 '} overflow-hidden transition-all duration-300 fixed top-0 left-0 w-screen bg-white text-dark dark:bg-dark dark:text-white z-30`}>
      <div className="p-4 mt-[6rem] h-[calc(100vh-6rem)] overflow-y-auto">
        {props.children}
      </div>
    </div>
  )
}

export default Drawer