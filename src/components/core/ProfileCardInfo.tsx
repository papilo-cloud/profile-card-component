import clsx from 'clsx'
import React, {ComponentProps, ReactNode} from 'react'


 export const CardInfo: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className={clsx(' flex justify-center items-center flex-col gap-1')} {...props}>
        <div className=' flex justify-center items-center gap-2'>
            {children?.[0]}
            {children?.[1]}
        </div>
        {children?.[2 as keyof ReactNode]}
    </div>
  )
}


const Name: React.FC<ComponentProps<'h2'>> = ({children, className, ...props}) => {
    return (
        <h2 className={clsx(' text-lg font-bold font-primary text-[#0d0d0d]', className)} {...props}>
            {children}
        </h2>
    )
}

const Age: React.FC<ComponentProps<'p'>> = ({children, className, ...props}) => {
    return (
        <p className={clsx(' text-lg font-primary font-bold text-[#6a6f81]', className)} {...props}>
            {children}
        </p>
    )
}
const City: React.FC<ComponentProps<'p'>> = ({children, className, ...props}) => {
    return (
        <p className={clsx(' text-sm font-normal font-primary text-[#6a6f81]', className)} {...props}>
            {children}
        </p>
    )
}

const ProfileCardInfo = {
    Name,
    Age,
    City
}
export default ProfileCardInfo