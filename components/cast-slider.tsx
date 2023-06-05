import { API } from '@base/types';
import Slider from './slider';
import { _getPosterURL } from '@base/lib/helpers';
import { DetailsWrapper, DetailsHeader } from './card/card-details';
import CardPoster from './card/card-poster';
import CardWrapper from './card/card-wrapper';

type Props = {
    cast: API.Cast[];
};

const CastSlider = ({ cast }: Props) => {
    if (!cast.length) {
        return null;
    }
    
    return (
        <Slider title="Top Billed Cast">
            {cast.map((cast) => (
                <CastCard cast={cast} key={cast.id} />
            ))}
        </Slider>
    );
};

const CastCard = ({ cast }: { cast: API.Cast }) => {
    return (
        <CardWrapper>
            <CardPoster src={_getPosterURL(cast.profile_path, 'w500')} alt={cast.character} />
            <DetailsWrapper>
                <DetailsHeader>{`${cast.name} as ${cast.character}`}</DetailsHeader>
            </DetailsWrapper>
        </CardWrapper>
    );
};

export default CastSlider;
