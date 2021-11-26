import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import { API } from "../../utils/types/api";
import Image from 'next/image';
import { _getPosterURL } from "../../utils/helper";
import { IconContainer } from "../../styles/globalStyles";
import { MinusIcon, StarIcon } from "../../styles/icons";

const ModalWrapper = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 20rem;
    z-index: 10;
    position: fixed;
    background-color: rgba(0,0,0,0.6);
`;

const ModalContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const ModalBody = styled.div`
    width: 55rem;
    min-height: 12rem;
    
    z-index: 10000;
    background-color: ${p => p.theme.gray50};
    font-family: 'Outfit';
    border-radius: 10px;
`;

const ModalHeader = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

const HeaderImage = styled.div`
    min-width: 120px;
    min-height: 240px;
    margin-right: 2rem;
`;

const HeaderContent = styled.div``;

const ModalTitle = styled.div`
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const ModalOverview = styled.div`
    font-size: 0.9rem;
    width: 30rem;
    margin-bottom: 2rem;
`;

const MainContent = styled.div`
    margin: 15px;
    max-height: 400px;
    overflow-y: auto;
`;

const EpisodeWrapper = styled.div`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    background-color: ${p => p.theme.gray100};
    min-height: 140px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const EpisodeImage = styled.div`
    padding: 10px;
    margin-right: 10px;
    min-width: 120px;
`;

const EpisodeOverview = styled.div``;

const SeasonModal = () => {
    const modal = useModal();

    if(!modal.open){
        return null;
    }

    if(!modal.season){
        return null;
    }

    console.log(modal.season);

    return(
        <ModalWrapper>
            <ModalContent>
                <ModalBody>
                    <ModalHeader>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <HeaderImage>
                                <Image 
                                    src={_getPosterURL(modal.season?.poster_path, 'original')}
                                    alt={modal.season?.name}
                                    width={180}
                                    height={240}
                                    objectFit="cover"
                                />
                            </HeaderImage>
                            <HeaderContent>
                                <ModalTitle>
                                    {modal.season?.name}
                                </ModalTitle>
                                <ModalOverview>
                                    {modal.season?.overview}
                                </ModalOverview>
                                <div>
                                    {new Date(modal.season?.air_date).toDateString()}
                                </div>
                            </HeaderContent>
                        </div>
                        <IconContainer style={{cursor: 'pointer'}} onClick={modal.closeModal} >
                            <MinusIcon />
                        </IconContainer>
                    </ModalHeader>
                    <MainContent>
                        <h3>Episodes</h3>
                        {modal.season?.episodes.map((x: API.Episode) => {
                            return(
                                <EpisodeWrapper key={x.id}>
                                    <EpisodeImage>
                                        <Image 
                                            src={_getPosterURL(x.still_path)}
                                            alt={x.name}
                                            width={100}
                                            height={120}
                                            objectFit="cover"
                                            />
                                    </EpisodeImage>
                                    <EpisodeOverview>
                                        <div style={{marginBottom: '5px'}}>
                                            {x.name}
                                        </div>
                                        <div style={{fontSize: '0.9rem', fontWeight: '200', marginBottom: '10px'}}>
                                            {x.overview}
                                        </div>
                                        <div style={{fontSize: '0.9rem', display: 'flex'}}>
                                            {new Date(x.air_date).toDateString()}
                                            <span style={{marginLeft: '25px', display: 'flex'}}>
                                                <IconContainer style={{marginRight: '8px'}}>
                                                    <StarIcon />
                                                </IconContainer> 
                                                {x.vote_average}
                                            </span>
                                        </div>
                                    </EpisodeOverview>
                                </EpisodeWrapper>
                            )
                        })}
                    </MainContent>
                </ModalBody>
                <ModalOverlay onClick={modal.closeModal} />
            </ModalContent>
        </ModalWrapper>
    )
}

export default SeasonModal;