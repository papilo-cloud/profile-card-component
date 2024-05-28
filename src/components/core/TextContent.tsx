import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

export interface TextContentProps extends ComponentProps<'div'> {
    children: ReactNode
}

export const TextContent = ({children, className, ...props}: TextContentProps) => {
  return (
    <div className={clsx(' relative w-full py-5 px-12 flex justify-between items-center')} {...props}>
        {children?.[0 as keyof ReactNode]}
        {children?.[1 as keyof ReactNode]}
        {children?.[2 as keyof ReactNode]}
    </div>
  )
}
