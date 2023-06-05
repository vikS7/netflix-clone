'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../common/icons';
import Button from '../common/button';
import { cx } from 'class-variance-authority';
import { MotionButton, MotionDiv } from '../common/motion-template';

type Props = {
    children?: ReactNode;
};

const Carousel = ({ children }: Props) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const [showPrevButton, setShowPrevButton] = useState<boolean>(false);
    const [showNextButton, setShowNextButton] = useState<boolean>(true);

    const handleScroll = () => {
        const sliderElement = sliderRef.current;
        if (!sliderElement) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = sliderElement;
        setShowPrevButton(scrollLeft > 0);
        setShowNextButton(scrollLeft < scrollWidth - clientWidth);
    };

    const scrollByOffset = (offset: number) => {
        sliderRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
    };

    return (
        <div className="group/button relative overflow-hidden">
            <MotionDiv
                className="no-scrollbar flex h-full snap-x snap-proximity justify-start space-x-4 overflow-x-auto overflow-y-hidden scroll-smooth"
                ref={sliderRef}
                onScroll={handleScroll}>
                {React.Children.map(children, (child, i) => (
                    <div key={i} className="snap-start">
                        {child}
                    </div>
                ))}
            </MotionDiv>
            <Button rounded='full'
                className={cx(
                    showPrevButton ? 'block' : 'hidden',
                    'absolute -left-10 top-2/4 -mt-5 bg-black p-3 opacity-0 transition-all group-hover/button:left-1 group-hover/button:opacity-100',
                )}
                onClick={() => scrollByOffset(-sliderRef.current!.offsetWidth)}>
                <ArrowLeft size="1.5" fill="inherit" />
            </Button>
            <Button rounded='full'
                className={cx(
                    showNextButton ? 'block' : 'hidden',
                    'absolute -right-10 top-2/4 -mt-5 rounded-full bg-black p-3 opacity-0 transition-all group-hover/button:right-1 group-hover/button:opacity-100',
                )}
                onClick={() => scrollByOffset(sliderRef.current!.offsetWidth)}>
                <ArrowRight size="1.5" fill="inherit" />
            </Button>
        </div>
    );
};

export default Carousel;
