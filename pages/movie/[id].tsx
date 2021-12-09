import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShowBanner from '../../common/components/ShowBanner/ShowBanner';
import ShowBlock from '../../common/components/ShowBlock/ShowBlock';
import VideoBlock from '../../common/components/VideoBlock/VideoBlock';
import { getMovieById, getSimilarMovieShows } from '../../common/utils/api/api';
import { _getTrailers } from '../../common/utils/helper';
import { API } from '../../common/utils/types/api';

interface IMovieDetails {
    movie: API.ShowDetails;
    suggestions: API.Show[];
}

const Wrapper = styled.div`
    width: 100%;
`;

const MovieDetail: React.FC<IMovieDetails> = ({movie, suggestions}) => {

    const [trailers, setTrailers] = useState<API.Video[]>();

    useEffect(() => {
        let videos = _getTrailers(movie.videos!);
        if(!!videos.length){
            setTrailers(videos);
        }
    }, [movie]);

    return (
        <Wrapper>
            <ShowBanner show={movie} />
            {trailers && <VideoBlock videos={trailers} title={"Trailers"} />}
            <ShowBlock shows={suggestions} title={"More like this"}/>
        </Wrapper>
    )
}

export default MovieDetail;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id;
    const movieDetails = await getMovieById(id);
    const suggestions = await getSimilarMovieShows(id)
    return {
        props: {
            movie: movieDetails,
            suggestions: suggestions
        }
    }
}