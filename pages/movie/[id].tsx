import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import styled from 'styled-components';
import ShowBanner from '../../common/components/ShowBanner/ShowBanner';
import ShowBlock from '../../common/components/ShowBlock/ShowBlock';
import { getMovieById, getSimilarMovieShows } from '../../common/utils/api/api';
import { API } from '../../common/utils/types/api';

interface IMovieDetails {
    movie: API.ShowDetails;
    suggestions: API.Show[];
}

const Wrapper = styled.div`
    width: 100%;
`;

const MovieDetail: React.FC<IMovieDetails> = ({movie, suggestions}) => {
    return (
        <Wrapper>
            <ShowBanner show={movie} />
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