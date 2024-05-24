import clsx from 'clsx';
import React, { ComponentProps, ReactNode } from 'react'

export interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
}

const Root = ({children, className, ...props}: RootProps) => {
  return (
    <div className={clsx('relative sm:w-[375px] overflow-hidden w-full h-auto bg-white shadow-xl rounded-2xl ', className)} {...props}>
        {children?.[0 as keyof ReactNode]}
        {children?.[1 as keyof ReactNode]}
    </div>
  )
}

export default Root