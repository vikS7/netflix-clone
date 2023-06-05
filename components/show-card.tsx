'use client';

import { useRouter } from 'next/navigation';
import CardWrapper from './card/card-wrapper';
import { _getPosterURL } from '@base/lib/helpers';
import { API } from '@base/types';
import moment from 'moment';
import { DetailsWrapper, DetailsHeader, DetailsFooter } from './card/card-details';
import Poster from './card/card-poster';
import { Star } from './common/icons';

const ShowCard = ({ show }: { show: API.Show }) => {
    const router = useRouter();

    return (
        <CardWrapper
            onClick={() =>
                router.push(`${show.media_type == 'movie' ? 'movie' : 'tv'}/${show.id}`)
            }>
            <Poster
                src={_getPosterURL(show.poster_path, 'w500')}
                alt={show.original_title ?? show.name}
            />
            <DetailsWrapper>
                <DetailsHeader>{show.original_title ?? show.name}</DetailsHeader>
                <DetailsFooter>
                    <div className="flex items-center justify-between">
                        <span>{moment(show.release_date).format('MMMM Do YYYY')}</span>
                        <span className="flex items-center">
                            <Star size="15" />
                            {Math.ceil(show.vote_average)}
                        </span>
                    </div>
                </DetailsFooter>
            </DetailsWrapper>
        </CardWrapper>
    );
};

export default ShowCard;
