import { cx } from 'class-variance-authority';
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string;
}

const BannerWrapper = ({children, className}: Props) => {
  return (
    <div className={cx(className, "relative flex h-[45rem] items-center")}>
        {children}
    </div>

  )
}

export default BannerWrapper