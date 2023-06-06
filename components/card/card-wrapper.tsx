import Link from 'next/link';
import React, { Fragment } from 'react';

type Props = {
    children: React.ReactNode;
    href?: string;
};

const CardWrapper = ({ children, href }: Props) => {
    return (
        <div className="group relative h-[12rem] w-[9rem] cursor-pointer overflow-hidden rounded-md sm-md:h-[14rem] sm-md:w-[10rem] md:h-[17rem] md:w-[12rem]">
            {href ? <Link className='w-full h-full' href={href}>{children}</Link> : <Fragment>{children}</Fragment>}
        </div>
    );
};

export default CardWrapper;
