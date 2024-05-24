import clsx from 'clsx'
import React, { ComponentProps, ReactElement } from 'react'

export interface TextContentProps extends ComponentProps<'div'> {
    children: ReactElement
}

export const TextContent = ({children, className, ...props}: TextContentProps) => {
  return (
    <div className={clsx(' relative w-full py-5 flex justify-between items-center')} {...props}>
        {children}
    </div>
  )
}
