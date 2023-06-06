'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { AnimatePresenceClient, MotionDiv } from '../common/motion-template';
import Image from 'next/image';
import { _getPosterURL } from '@base/lib/helpers';

type Props = {
    backdrop: string;
    poster: string;
    alt: string;
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.1 } },
    exit: { opacity: 0 },
};

const BannerPoster = ({ backdrop, alt, poster }: Props) => {
    const [backdropSrc, setBackDropSrc] = useState(backdrop);
    const [posterSrc, setPosterSrc] = useState(poster);

    useEffect(() => {
        setBackDropSrc(backdrop);
    }, [backdrop]);

    useEffect(() => {
        setPosterSrc(poster);
    }, [poster]);

    return (
        <Fragment>
            <AnimatePresenceClient>
                <MotionDiv
                    key={'bannerImage'}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden bg-inherit">
                    <Image
                        src={backdropSrc}
                        alt={alt}
                        onError={() => setBackDropSrc('/fallback-backdrop.png')}
                        fill
                        sizes="(min-width: 550px) 75vw, (min-width: 768px) 100vw, 60vw"
                        className="hidden object-cover md:block"
                        quality={90}
                    />
                    <Image
                        src={posterSrc}
                        alt={alt}
                        fill
                        onError={() => setPosterSrc('/fallback-poster.png')}
                        sizes="(min-width: 550px) 50vw, (min-width: 768px) 100vw, 33vw"
                        className="block object-cover md:hidden"
                        quality={70}
                    />
                </MotionDiv>
            </AnimatePresenceClient>
            <div className="absolute left-0 top-0 -z-[9] h-full w-full bg-gradient-to-b from-black/50 to-background transition-all md:from-transparent md:to-background"></div>
        </Fragment>
    );
};

export default BannerPoster;
