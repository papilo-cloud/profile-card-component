import clsx from 'clsx'
import React, { ComponentProps, ReactNode } from 'react'

export const ProfileCardStats: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={clsx('flex flex-col gap-0.5 justify-center items-center', className)}>
        {children?.[0 as keyof ReactNode]}
        {children?.[1 as keyof ReactNode]}
    </div>
  )
}

const Count: React.FC<ComponentProps<'h2'>> = ({children, className, ...props}) => {
    return (
        <h2 className={clsx(' text-lg font-bold font-primary text-[#0d0d0d]', className)} {...props}>
            {children}
        </h2>
    )
}

const Name: React.FC<ComponentProps<'p'>> = ({children, className, ...props}) => {
    return (
        <p className={clsx(' text-[10px] font-primary font-normal text-[#6a6f81]', className)} {...props}>
            {children}
        </p>
    )
}

const Stats = {
    Count,
    Name
}
export default Stats