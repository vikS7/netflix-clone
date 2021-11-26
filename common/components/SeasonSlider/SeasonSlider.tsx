import { API } from "../../utils/types/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import SeasonCard from "../SeasonCard/SeasonCard";
import { useEffect, useState } from "react";
import { responsive } from "../../utils/helper";

interface ISeasonSlider {
    season: API.Season[];
    tvId: number;
}


const Wrapper = styled.div`

`;

const SeasonSlider: React.FC<ISeasonSlider> = ({season, tvId}) => {

    const [airedSeasons, setAiredSeasons] = useState(season);

    useEffect(() => {
        let filtered = season.filter(x => {
            if(x.air_date == null){
                return false;
            }
            if(new Date(x.air_date) > new Date()){
                return false;
            }
            return true;
        });

        setAiredSeasons(filtered);

    }, [season]);

    return(
        <Wrapper>
            <Carousel
                responsive={responsive}
                ssr={true}
            >
                {airedSeasons.map(x => {
                    return <SeasonCard key={x.id} season={x} tvId={tvId}/>
                })}
            </Carousel>
        </Wrapper>
    )
}

export default SeasonSlider;