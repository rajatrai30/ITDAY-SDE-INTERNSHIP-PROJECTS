import { Button, EvenToLeftTitle } from "../../packages/utils"

const GetStarted = () => {
  return (
    <div className='p-4 lg:py-10 w-full space-y-8'>
          <EvenToLeftTitle className='text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.25rem] tracking-wide'>get started now</EvenToLeftTitle>
          <div className='w-full flex items-start justify-end'>
            <div className='max-w-[25rem] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10'>
              <p className='text-sm text-textGrey'>Now in over 40 sectors and industries worldwide.</p>
              <Button theme='dark' border='full' animatable>
                Get Started
              </Button>
            </div>
          </div>
        </div>
  )
}

export default GetStarted