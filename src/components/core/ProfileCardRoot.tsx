import clsx from 'clsx';
import React, { ComponentProps, ReactNode } from 'react'



const Root: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={clsx('relative sm:w-[375px] overflow-hidden w-full h-auto bg-white shadow-xl rounded-2xl ', className)} {...props}>
        {children}
    </div>
  )
}

export default Root