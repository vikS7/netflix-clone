import { _getPosterURL, _getTrailerUrl } from '@base/lib/helpers';
import { API } from '@base/types';
import React from 'react';
import BannerDetails from './banner/banner-details';
import BannerPoster from './banner/banner-poster';
import BannerWrapper from './banner/banner-wrapper';
import Button from './common/button';

type Props = {
    series: API.ShowDetails;
};

const SeriesBanner = ({ series }: Props) => {
    const trailerUrl = _getTrailerUrl(series);
    return (
        <BannerWrapper>
            <BannerDetails title={series.original_title ?? series.name} {...series}>
                <div className="my-3 flex items-center">
                    {trailerUrl && (
                        <Button className="mr-3" intent="translucent" size="medium" rounded="large">
                            <a href={trailerUrl} target="_blank">
                                Play Trailer
                            </a>
                        </Button>
                    )}
                </div>
            </BannerDetails>
            <BannerPoster
                backdrop={_getPosterURL(series.backdrop_path)}
                poster={_getPosterURL(series.poster_path)}
                alt={series.original_title ?? series.name}
            />
        </BannerWrapper>
    );
};

export default SeriesBanner;
