import React from 'react';
import ShowSlider from '@components/show-slider';
import { shuffleArray } from '@base/lib/helpers';
import HomeBanner from '@components/banner-home';
import { getShows, getTrending } from '@base/lib/api';

export default async function Home() {
    const trending = await getTrending('all', 'week');
    const movies = await getShows('movie', ['popular']);
    const tvShows = await getShows('tv', ['popular']);

    const sliders = [
        {
            title: "Trending this week",
            shows: shuffleArray(trending),
            href: '/show?media_type=all&type=trending&time_window=week&title=Trending this week'
        },
        {
            title: "Popular Movies",
            shows: movies.popular,
            href: '/show?media_type=movie&ratings_type=popular&title=Popular Movies'
        },
        {
            title: "Popular Tv Series",
            shows: tvShows.popular,
            href: '/show?media_type=tv&ratings_type=popular&title=Popular Tv Series'
        }
    ]

    return (
        <React.Fragment>
            <HomeBanner show={trending[Math.floor(Math.random() * trending.length)]} />
            {
                sliders.map((s, i) => <ShowSlider {...s} key={i}/>)
            }
        </React.Fragment>
    );
}


