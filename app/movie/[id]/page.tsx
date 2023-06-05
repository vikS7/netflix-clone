import { Fragment } from 'react';
import MovieBanner from '@base/components/banner-movie';
import CastSlider from '@base/components/cast-slider';
import ShowSlider from '@base/components/show-slider';
import { getById, getCredits, getList } from '@base/lib/api';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
    const id = params.id;

    const movie = await getById(id, 'movie', true);

    return {
        title: `Movie.io - ${movie.original_title ?? movie.name}`,
    };
}

const Movie = async ({ params }: Props) => {
    const movie = await getById(params.id, 'movie', true);
    const credits = await getCredits(params.id, 'movie');

    const movieList = await getList(
        params.id,
        'movie',
        ['similar', 'recommendations'],
        '&sort_by=primary_release_date.asc',
    );
    const cast =
        credits?.cast?.filter((c) => c.known_for_department === 'Acting').slice(0, 10) || [];

    const sliders = [
        {
            title: 'Similar Movies',
            shows: movieList.similar,
        },
        {
            title: 'Recommendations',
            shows: movieList.recommendations,
        },
    ];

    return (
        <Fragment>
            <MovieBanner movie={movie} />
            <CastSlider cast={cast} />
            {sliders.map((f, i) => {
                if (!f) return null;
                return <ShowSlider {...f} key={i} />;
            })}
        </Fragment>
    );
};

export default Movie;
