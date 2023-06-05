import { API } from '@base/types';
import Slider from './slider';
import ShowCard from './show-card';

type Props = {
    shows: API.Show[];
    title?: string;
    href?: string;
};

const ShowSlider = ({ shows, title, href }: Props) => {
    if(!shows?.length) return null;
    
    return (
        <Slider title={title} href={href}>
            {shows.map((show) => {
                return <ShowCard show={show} key={show.id} />
            })}
        </Slider>
    );
};

export default ShowSlider;
