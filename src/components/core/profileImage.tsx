import clsx from 'clsx'
import React from 'react'

type ProfileImageProps = {
    url: string
}

const profileImage = ({
    className,
    url,
    ...props
}: ProfileImageProps & React.ComponentProps<"img">) => {
  return (
    <img 
      className={clsx('relative rounded-full', className)}
      src={url} 
      alt="" 
      {...props} />
  )
}

export default profileImage