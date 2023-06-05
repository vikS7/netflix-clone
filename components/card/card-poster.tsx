'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader } from '../loader';

type Props = {
    src: string;
    alt: string;
    fallback?: string;
};

const CardPoster = ({ src, alt, fallback = '/fallback-poster.png' }: Props) => {
    const [imgSource, setImgSource] = useState<string>(src);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setImgSource(src);
    }, [src]);

    return (
        <div className="relative h-full">
            {!isLoaded && <Loader />}
            <Image
                src={imgSource}
                alt={alt}
                fill
                onLoadingComplete={() => setIsLoaded(true)}
                onError={() => setImgSource(fallback)}
                sizes="50vw"
                className="h-full w-full min-w-[100%] object-cover transition-transform group-hover:scale-110"
            />
        </div>
    );
};

export default CardPoster;
