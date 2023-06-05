import HomeBanner from '@base/components/banner-home';
import MovieBanner from '@base/components/banner-movie';
import ShowSlider from '@base/components/show-slider';
import { getShows } from '@base/lib/api';
import React, { Fragment } from 'react';

type Props = {};

export const metadata = {
    title: 'Movie.io - Movies'
};

const Movies = async (props: Props) => {
    const movieList = await getShows('movie', ['top_rated', 'popular', 'now_playing', 'upcoming']);

    const sliders = [
        {
            title: "Now Playing",
            shows: movieList.now_playing,
            href: '/show?media_type=movie&ratings_type=now_playing&title=Now Playing'
        },
        {
            title: "Top Rated",
            shows: movieList.top_rated,
            href: '/show?media_type=movie&ratings_type=top_rated&title=Top Rated Movies'
        },
        {
            title: "Upcoming",
            shows: movieList.upcoming,
            href: '/show?media_type=movie&ratings_type=upcoming&title=Upcoming Movies'
        },
        {
            title: "Popular",
            shows: movieList.popular,
            href: '/show?media_type=movie&ratings_type=popular&title=Popular Movies'
        }
    ]

    return (
        <Fragment>
            <HomeBanner show={movieList.now_playing[0]} />
            {
                sliders.map((s, i) => <ShowSlider {...s} key={i} />)
            }
        </Fragment>
    );
};

export default Movies;
