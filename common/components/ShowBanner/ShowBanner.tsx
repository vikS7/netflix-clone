import styled from "styled-components";
import { API } from "../../utils/types/api";
import Image from 'next/image';
import { _getPosterURL } from "../../utils/helper";
import { Button } from "../../styles/globalStyles";
import { StarIcon } from "../../styles/icons";
import {IconContainer} from '../../styles/globalStyles';

interface IShowDetails {
    show: API.ShowDetails;
}

const Wrapper = styled.div`
    width: 100%;
    height: 50rem;
`;

const WrapperContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const WrapperBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
`;

const ShowContent = styled.div`
    width: 70rem;
    min-width: 50rem;
    height: 100%;
    padding-top: 30rem;
    padding-left: 5rem;
    align-items: center;
    font-family: 'Outfit';
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

const ShowTitle = styled.div`
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

const ShowGenre = styled.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${p => p.theme.gray900}
`;

const ContentBlock = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
`;

const ContentGenre = styled.div`
    display: flex;
    align-items: center;
`;

const ContentOverview = styled.div`
    margin-top: 15px;
    font-size: 1.1rem;
    font-weight: 200;
`;

const ShowBanner: React.FC<IShowDetails> = ({show}) => {

    return(
        <Wrapper>
            <WrapperContent>
                <ShowContent>
                    <ShowTitle>
                        {show.name ? show.name : show.original_title}
                    </ShowTitle>
                    <ContentGenre>
                        <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
                            <IconContainer>
                                <StarIcon />
                            </IconContainer>
                            <div style={{marginLeft: '5px'}}>
                                {show.vote_average}.
                            </div>
                        </div>
                        <ShowGenre>
                            <span>{show.genres.map(e => e.name).join(", ")}</span>
                        </ShowGenre>
                    </ContentGenre>
                    <ContentBlock>
                        <Button $secondary={false}>
                            Play
                        </Button>
                    </ContentBlock>
                    <ContentOverview>
                        {show.overview}
                    </ContentOverview>
                </ShowContent>
                <WrapperBackground>
                    {show.backdrop_path && <Image
                        src={_getPosterURL(show.backdrop_path, "original")}
                        alt={show.name ? show.name : show.original_title}
                        layout="fill"
                        objectFit="cover"
                        
                    />}
                </WrapperBackground>
                <Overlay />
            </WrapperContent>
        </Wrapper>
    )
}

export default ShowBanner;