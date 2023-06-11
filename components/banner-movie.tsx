import { API } from '@base/types';
import React from 'react';
import BannerDetails from './banner/banner-details';
import BannerPoster from './banner/banner-poster';
import BannerWrapper from './banner/banner-wrapper';
import { _getPosterURL, _getTrailerUrl, formatDate } from '@base/lib/helpers';
import { InfoCircle, Star } from './common/icons';
import Button from './common/button';

type Props = {
    movie: API.ShowDetails;
};

const MovieBanner = ({ movie }: Props) => {
    const trailerUrl = _getTrailerUrl(movie);
    return (
        <BannerWrapper>
            <BannerDetails title={movie.original_title ?? movie.name} {...movie}>
                <div className="my-3 flex flex-col sm-md:flex-row sm-md:items-center sm-md:space-x-2">
                    {trailerUrl && (
                        <Button intent="translucent" className='mb-2 sm-md:mb-0' size="medium" rounded="large">
                            <a href={trailerUrl} target="_blank">
                                Play Trailer
                            </a>
                        </Button>
                    )}
                    <Button rounded="large" intent="primary" size="medium">
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_blank">
                            More info
                        </a>
                    </Button>
                </div>
            </BannerDetails>
            <BannerPoster backdrop={_getPosterURL(movie.backdrop_path)} poster={_getPosterURL(movie.poster_path)} alt={movie.original_title ?? movie.name} />
        </BannerWrapper>
    );
};

export default MovieBanner;
