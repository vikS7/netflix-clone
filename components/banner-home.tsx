"use client";

import { API } from '@base/types';
import { MouseEventHandler } from 'react';
import BannerPoster from './banner/banner-poster';
import BannerDetails from './banner/banner-details';
import BannerWrapper from './banner/banner-wrapper';
import { useRouter } from 'next/navigation';
import { _getPosterURL } from '@base/lib/helpers';

type Props = {
    show: API.Show;
};

const HomeBanner = ({ show }: Props) => {
    const router = useRouter();

    const onTitleClick: MouseEventHandler = (e) => {
        router.push(`${show.media_type == 'movie' ? 'movie' : 'tv'}/${show.id}`);
    };

    return (
        <BannerWrapper>
            <BannerDetails
                onTitleClick={onTitleClick}
                title={show.original_title ?? show.name}
                {...show}
            />
            <BannerPoster backdrop={_getPosterURL(show.backdrop_path)} poster={_getPosterURL(show.poster_path)} alt={show.original_title ?? show.name} />
        </BannerWrapper>
    );
};

export default HomeBanner;
