import clsx from "clsx";
import React, { ComponentProps } from "react";

const HeadingText: React.FC<ComponentProps<'h2'>> = ({children, className, ...props}) => {
    return (
        <h2 className={clsx(' text-lg font-bold text-[#0d0d0d]', className)} {...props}>
            {children}
        </h2>
    )
}

const BodyText: React.FC<ComponentProps<'p'>> = ({children, className, ...props}) => {
    return (
        <p className={clsx(' text-sm font-normal text-[#6a6f81]', className)} {...props}>
            {children}
        </p>
    )
}

const Typography = {
    HeadingText,
    BodyText
}

export default Typography