import { API } from "../../utils/types/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ShowCard from "../ShowCard/ShowCard";
import { responsive } from "../../utils/helper";

interface IShow {
    shows: API.Show[];
    title: string;
}

const BlockWrapper = styled.div`
    margin: 5rem;

    @media(max-width: 712px) {
        margin-right: 2rem;
    }

    @media(max-width: 458px){
        margin-right: 1rem;
    }

`;

const BlockTitle = styled.div`
    font-weight: 500;
    font-family: 'Outfit';
    font-size: 2rem;
    margin-bottom: 0.5rem;

    @media(max-width: 712px) {
        font-size: 1.8rem;
    }

`;

const ShowBlock: React.FC<IShow> = ({shows, title}) => {
    return(
        <BlockWrapper>
            <BlockTitle>
                {title}
            </BlockTitle>
            <Carousel
                responsive={responsive}
                ssr={true}
            >
                {shows.map((show: API.Show) => {
                    return (
                        <ShowCard key={show.id} show={show} />
                    )
                })}
            </Carousel>
        </BlockWrapper>
    )
}

export default ShowBlock;