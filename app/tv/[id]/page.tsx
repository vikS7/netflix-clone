import SeriesBanner from '@base/components/banner-series';
import CastSlider from '@base/components/cast-slider';
import SeasonSlider from '@base/components/season-slider';
import ShowSlider from '@base/components/show-slider';
import { getById, getCredits, getList } from '@base/lib/api';
import React, { Fragment } from 'react';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
    const id = params.id;

    const show = await getById(params.id, 'tv', true);

    return {
        title: `Movie.io - ${show.original_title ?? show.name}`,
    };
}

const TvShow = async ({ params }: Props) => {
    const show = await getById(params.id, 'tv', true);
    const showList = await getList(
        params.id,
        'tv',
        ['similar', 'recommendations'],
        '&sort_by=primary_release_date.asc',
    );
    const credits = await getCredits(params.id, 'tv');

    const cast =
        credits?.cast?.filter((c) => c.known_for_department === 'Acting').slice(0, 10) || [];

    const sliders = [
        {
            title: 'Similar Series',
            shows: showList.similar,
        },
        {
            title: 'Recommendations',
            shows: showList.recommendations,
        },
    ];

    return (
        <Fragment>
            <SeriesBanner series={show} />
            <CastSlider cast={cast} />
            <SeasonSlider seasons={show.seasons} />
            {sliders.map((f, i) => {
                return <ShowSlider {...f} key={i} />;
            })}
        </Fragment>
    );
};

export default TvShow;
