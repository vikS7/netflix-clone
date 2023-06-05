import HomeBanner from '@base/components/banner-home';
import ShowSlider from '@base/components/show-slider';
import { getShows } from '@base/lib/api';
import React, { Fragment } from 'react';

type Props = {};

export const metadata = {
    title: 'Movie.io - Tv series'
};

const TvSeries = async (props: Props) => {
    const seriesList = await getShows('tv', ['top_rated', 'popular', 'on_the_air', 'airing_today']);

    const sliders = [
        {
            title: "On the air",
            shows: seriesList.on_the_air,
            href: '/show?media_type=tv&ratings_type=on_the_air&title=On the air Tv Series'
            
        },
        {
            title: "Top Rated",
            shows: seriesList.top_rated,
            href: '/show?media_type=tv&ratings_type=top_rated&title=Top Rated Tv Series'
        },
        {
            title: "Airing Today",
            shows: seriesList.airing_today,
            href: '/show?media_type=tv&ratings_type=airing_today&title=Airing Today Tv Series'
        },
        {
            title: "Popular",
            shows: seriesList.popular,
            href: '/show?media_type=tv&ratings_type=popular&title=Popular Tv Series'
        }
    ]

    return (
        <Fragment>
            <HomeBanner show={seriesList.on_the_air[0]} />
            {
                sliders.map((s, i) => <ShowSlider {...s} key={i} />)
            }
        </Fragment>
    );
};

export default TvSeries;