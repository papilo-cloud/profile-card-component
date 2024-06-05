import clsx from 'clsx'
import React, { ComponentProps } from 'react'


export const TextContent: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={clsx(' relative w-full py-5 px-12 flex justify-between items-center')} {...props}>
        {children}
    </div>
  )
}
