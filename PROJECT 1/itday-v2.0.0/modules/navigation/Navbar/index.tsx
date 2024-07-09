import { faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from '../../../packages/utils'
import Logo from '../../logo'
import Drawer from '../drawer'
import Navigation from '../Navigation'


const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className='w-screen fixed top-0 left-0 z-50 py-3 bg-white dark:bg-dark'>
        <div className='w-full max-w-[1500px] mx-auto flex items-center justify-between p-4 lg:px-8'>
          <Logo />
          <div className='flex items-center space-x-8 lg:space-x-16'>
            <Button className='hidden md:flex' border='full' theme='dark' animatable>
              Get Started
            </Button>
            <div className='flex items-center'>
              <Button noRightBorder shape='square' animatable className='border-black2 text-black2 dark:border-white dark:text-white' border='full'>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <Button onClick={() => setDrawerOpen(!drawerOpen)} shape='square' animatable className='border-black2 text-black2 dark:border-white dark:text-white' border='full'>
                <div className='w-full h-full flex items-center justify-center'>
                  <FontAwesomeIcon icon={drawerOpen ? faXmark : faBars} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Drawer open={drawerOpen} >
        <Navigation />
      </Drawer>
    </>
  )
}

export default Navbar