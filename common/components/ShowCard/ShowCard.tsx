import styled from 'styled-components';
import { API } from '../../utils/types/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { _getPosterURL } from '../../utils/helper';
import { StarIcon } from '../../styles/icons';
import {IconContainer, CardBackground, CardContent, CardOverview, CardTitle, CardWrapper} from '../../styles/globalStyles';

interface IShowCard {
    show : API.Show;
}


const ShowCard: React.FC<IShowCard> = ({show}) => {
    const router = useRouter();
    const navigateToDetails = (show: API.Show) => {
        let id = show.id;
        let route = show.name  ? 'tv' : 'movie';
        router.push(`/${route}/${show.id}`);
    }

    return(
        <CardWrapper onClick={() => navigateToDetails(show)}>
            <CardBackground>
                {show.poster_path && 
                    <Image
                        src={_getPosterURL(show.poster_path)}
                        alt={ show.name ? show.name : show.original_title }
                        layout="fill"
                        objectFit="cover"
                        unoptimized 
                    />
                }
            </CardBackground>
            <CardContent>
                <CardTitle>
                    { show.name ? show.name : show.original_title}
                </CardTitle>
                <CardOverview>
                    <div style={{marginBottom: '10px'}}>
                        {show.release_date ? new Date(show.release_date).getFullYear() : new Date(show.first_air_date).getFullYear()}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconContainer>
                            <StarIcon />
                        </IconContainer>
                        <div style={{marginLeft: '8px'}}>
                            {show.vote_average}
                        </div>
                    </div>
                </CardOverview>
            </CardContent>
        </CardWrapper>
    )
}

export default ShowCard;