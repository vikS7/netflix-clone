import { API } from '@base/types';
import BannerPoster from './banner/banner-poster';
import BannerDetails from './banner/banner-details';
import BannerWrapper from './banner/banner-wrapper';
import { _getPosterURL } from '@base/lib/helpers';

type Props = {
    show: API.Show;
};

const HomeBanner = ({ show }: Props) => {
    return (
        <BannerWrapper>
            <BannerDetails
                title={show.original_title ?? show.name}
                href={`${show.media_type == 'movie' ? 'movie' : 'tv'}/${show.id}`}
                {...show}
            />
            <BannerPoster backdrop={_getPosterURL(show.backdrop_path)} poster={_getPosterURL(show.poster_path)} alt={show.original_title ?? show.name} />
        </BannerWrapper>
    );
};

export default HomeBanner;
