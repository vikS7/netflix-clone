import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SeasonSlider from '../../common/components/SeasonSlider/SeasonSlider';
import ShowBanner from '../../common/components/ShowBanner/ShowBanner';
import ShowBlock from '../../common/components/ShowBlock/ShowBlock';
import VideoBlock from '../../common/components/VideoBlock/VideoBlock';
import { getSimilarTvShows, getTvById, getTvSeasons } from '../../common/utils/api/api';
import { _getTrailers } from '../../common/utils/helper';
import { API } from '../../common/utils/types/api';

interface ITvDetails {
    tv: API.ShowDetails,
    suggestions : API.Show[]
}

const Wrapper = styled.div`
    width: 100%;
`;

const WrapperSlider = styled.div`
    margin: 5rem;
`;

const WrapperTitle = styled.div`
    font-weight: 500;
    font-family: 'Outfit';
    font-size: 2rem;
    margin-bottom: 0.5rem;
`;

const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SelectWrapper = styled.div`

`;

const TvDetails: React.FC<ITvDetails> = ({tv, suggestions}) => {
    
    const [trailers, setTrailers] = useState<API.Video[]>();

    useEffect(() => {
        let videos = _getTrailers(tv.videos!);
        if(!!videos.length){
            setTrailers(videos);
            
        }
    }, [tv]);

    return(
        <Wrapper>
            <ShowBanner show={tv} />
            {trailers && <VideoBlock videos={trailers} title={"Trailers"} />}
                <WrapperSlider>
                    <WrapperHeader>
                        <WrapperTitle>
                            Seasons
                        </WrapperTitle>
                    </WrapperHeader>
                    <SeasonSlider season={tv.seasons!} tvId={tv.id} />
                </WrapperSlider>
            <ShowBlock shows={suggestions} title={"More like this"}/>
        </Wrapper>
    );
}

export default TvDetails;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id;
    const show = await getTvById(id as string);
    const suggestions = await getSimilarTvShows(id);
    return {
        props: {
            tv: show,
            suggestions: suggestions
        }
    }
}