import { API } from "../../utils/types/api";
import styled from "styled-components";
import Image from 'next/image';
import { _getPosterURL } from "../../utils/helper";
import {Button} from '../../styles/globalStyles';
import { useRouter } from "next/router";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 55rem;
`;

const WrapperContent = styled.div`
    margin: 0 5rem;
    max-width: 150rem;
    width: 30rem;
    font-family: 'Outfit';

    @media(max-width: 712px){
        margin: 0 2rem;
    }

    @media(max-width: 458px){
        margin: 0 1rem;
    }
`;

const WrapperBackground = styled.div`
    postition: absolute;
    left: 0;
    top: 0;
    z-index: -1;
`;

const Overlay = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, ${p => p.theme.gray50} 0%, transparent 100%);
`;

const Title = styled.div`
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.1rem;
    line-height: 1;
    cursor: pointer;
    width: fit-content;
    transition: 0.2s all ease-in;

    &:hover{
        color: ${p => p.theme.primary};
    }
`;

const Overview = styled.div`
    max-width: 50rem;
    margin-top: 1rem;
    word-wrap: break-word;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;


const Featured: React.FC<API.Show> = ({id, original_title, backdrop_path, overview, name, media_type }) => {
    
    const router = useRouter();
    const navigateToDetails = () => {
        let showId = id;
        let route = name  ? 'tv' : 'movie';
        router.push(`/${route}/${showId}`);
    }

    return(
        <Wrapper>
           <WrapperContent>
                <Title onClick={navigateToDetails}>{media_type == 'tv'? name : original_title}</Title>
                <Overview>{overview?.length > 180 ? overview.substring(0,175) + "..." : overview}</Overview>
                <ButtonContainer>
                    <Button>
                        Watch
                    </Button>
                    <Button $secondary={true}>
                        + Add to Watchlist
                    </Button>
                </ButtonContainer>
           </WrapperContent>
           <WrapperBackground>
                {backdrop_path && 
                    <Image 
                        src={_getPosterURL(backdrop_path, "original")}
                        alt={original_title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 15%"
                        unoptimized
                    />
                }

           </WrapperBackground>
           <Overlay />
        </Wrapper>
    )
}

export default Featured;