import styled from 'styled-components';
import { CardBackground, CardContent, CardOverview, CardTitle, CardWrapper } from '../../styles/globalStyles';
import { API } from "../../utils/types/api";
import Image from 'next/image';
import { _getPosterURL } from '../../utils/helper';
import { useModal } from '../../hooks/useModal';

interface ISeason {
    season: API.Season;
    tvId: number;
}

const SeasonCard: React.FC<ISeason> = ({season, tvId}) => {
    
    const modalProp = useModal();

    const modalHandler = () => {
        modalProp.seasonHandler(tvId, season.season_number);
        modalProp.openModal();
    }

    return(
        <CardWrapper onClick={modalHandler}>
            <CardBackground>
                {season.poster_path && 
                    <Image
                        src={_getPosterURL(season.poster_path)}
                        alt={season.name }
                        layout="fill"
                        objectFit="cover" 
                    />
                }
            </CardBackground>
            <CardContent>
                <CardTitle>
                    {season.name}
                    <div style={{fontSize: '0.8rem', marginTop: "10px"}}>
                        {season.overview.length > 56 ? season.overview.substring(0, 50) + "..." : season.overview}
                    </div>
                </CardTitle>
                <CardOverview>
                    <div>
                        {new Date(season.air_date).getFullYear()}
                        <p>{season.episode_count} Episodes</p>
                    </div>
                    
                </CardOverview>
            </CardContent>
        </CardWrapper>
    )
}

export default SeasonCard;