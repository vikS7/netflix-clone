'use client';

import React, { Children, useRef } from 'react';
import { useInView } from 'framer-motion';
import { MotionDiv } from '../common/motion-template';
import Carousel from '../carousel';

type Props = {
    children: React.ReactNode;
    title?: string;
    href?: string;
};

const Slider = ({ children, title, href}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="group/title m-4 p-3" ref={ref}>
            {title && (
                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={isInView && { opacity: 1 }}
                    exit={{opacity: 0}}
                    className="mb-3  flex items-center">
                    <span className='text-xl md:text-2xl cursor-default'>{title}</span>
                    {href && <a href={href} className='group-hover/title:opacity-100 opacity-0 text-blue-500 transition-opacity md:text-base text-sm ml-4'> {'Show all >>'} </a>}
                </MotionDiv>
            )}
            <Carousel>
                {Children.map(children, (child, i) => (
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={
                            isInView && {
                                opacity: 1,
                                transition: { delay: (i + 1) * 0.1 },
                            }
                        }
                        exit={{opacity: 0}}
                        key={i}>
                        {child}
                    </MotionDiv>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
