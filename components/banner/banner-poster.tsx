"use client";

import React, { Fragment, useEffect, useState } from 'react';
import { MotionDiv } from '../common/motion-template';
import Image from 'next/image';
import { _getPosterURL } from '@base/lib/helpers';

type Props = {
    backdrop: string;
    poster: string;
    alt: string;
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const BannerPoster = ({ backdrop, alt, poster }: Props) => {
    const [backdropSrc, setBackDropSrc] = useState(backdrop);
    const [posterSrc, setPosterSrc] = useState(poster);

    useEffect(() => {
      setBackDropSrc(backdrop)
    }, [backdrop])

    useEffect(() => {
      setPosterSrc(poster)
    }, [poster])
    
    

    return (
        <Fragment>
            <MotionDiv
                key={'bannerImage'}
                variants={item}
                initial="hidden"
                animate="show"
                className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden bg-inherit">
                <Image
                    src={backdropSrc}
                    alt={alt}
                    onError={() => setBackDropSrc('/fallback-backdrop.png')}
                    fill
                    sizes='(max-width: 550px) 75vw, (max-width: 768px) 100vw, 50vw'
                    className="object-cover hidden md:block"
                />
                <Image
                    src={posterSrc}
                    alt={alt}
                    fill
                    onError={() => setPosterSrc('/fallback-poster.png')}
                    sizes='(max-width: 550px) 50vw, (max-width: 768px) 100vw, 33vw'
                    className="object-cover md:hidden block"
                />
            </MotionDiv>
            <div className="absolute left-0 top-0 -z-[9] h-full w-full from-black/50 to-background bg-gradient-to-b md:from-transparent md:to-background transition-all"></div>
        </Fragment>
    );
};

export default BannerPoster;
