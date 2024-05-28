import clsx from 'clsx'
import defaultBgPattern from '../../../public/images/bg-pattern-card.svg'
import defaultAvatar from '../../../public/images/image-victor.jpg'
import { ComponentProps } from 'react'
import { ReactNode } from 'react'

interface BackgroundProps extends ComponentProps<'div'> {
    children?: ReactNode
}

export const BackgroundContent = ({className, children, ...props}: BackgroundProps) => {
  return (
    <div className={clsx('w-full h-full relative bg-white flex flex-col border-b-2 border-gray-300 ', className)} {...props}>
        {children?.[0 as keyof ReactNode]}
        <div className={clsx('relative w-full min-h-[120px] bg-white flex flex-col justify-end items-center pb-5', className)}>
                {children?.[1 as keyof ReactNode]}
        </div>
        {/* }
        {children?.[1 as keyof ReactNode]} */}
    </div>
  )
}

interface BgPatternAndAvatarProps extends BackgroundProps {
    bgPattern?: string
    avatar?: string
}

export const BgPatternAndAvatar = ({className, bgPattern, avatar, ...props}: BgPatternAndAvatarProps) => {
    return (
        <div className={clsx('relative w-full min-h-28 bg-blue-500 ', className)} {...props}>
            <img className={clsx('absolute w-full h-full')} src={bgPattern || defaultBgPattern} alt="backgroung-image" />
            <div className=' z-50 absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full flex self-center justify-center items-center bg-white p-1'>
                <img className=' rounded-full bg-white w-full h-full' src={avatar || defaultAvatar} alt="avatar" />
            </div>
        </div>
    )
}