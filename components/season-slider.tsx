import { API } from '@base/types';
import CardWrapper from './card/card-wrapper';
import { _getPosterURL } from '@base/lib/helpers';
import moment from 'moment';
import { DetailsWrapper, DetailsHeader, DetailsFooter } from './card/card-details';
import CardPoster from './card/card-poster';
import Slider from './slider';

type Props = {
    seasons?: API.Season[];
};

const SeasonSlider = ({ seasons }: Props) => {
    if (!seasons) return null;
    return (
        <Slider title="Seasons">
            {seasons.map((show) => {
                return <SeasonCard season={show} key={show.id} />;
            })}
        </Slider>
    );
};

const SeasonCard = ({ season }: { season: API.Season }) => {
    return (
        <CardWrapper>
            <CardPoster src={_getPosterURL(season.poster_path, 'w500')} alt={season.name} />
            <DetailsWrapper>
                <DetailsHeader>Season {season.season_number}</DetailsHeader>
                <DetailsFooter>
                    <span className="flex items-center mb-2">{season.episode_count} episode(s)</span>
                    <span>{moment(season.air_date).format('MMMM Do YYYY')}</span>
                </DetailsFooter>
            </DetailsWrapper>
        </CardWrapper>
    );
};

export default SeasonSlider;
