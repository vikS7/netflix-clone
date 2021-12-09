import { API } from "../../utils/types/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import ShowCard from "../ShowCard/ShowCard";
import { responsive, _getThumbnailUrl, _getTrailerUrl } from "../../utils/helper";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard/VideoCard";

interface IVideo {
    videos: API.Video[];
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

const VideoBlock: React.FC<IVideo> = ({videos, title}) => {
    const [trailers, setTrailers] = useState<API.Video[]>();

    useEffect(() => {
        let t : API.Video[] = videos.map(video => {
            return {...video,
                thumbnail_url : _getThumbnailUrl(video.key),
                url : _getTrailerUrl(video.key)
                }
        });
        setTrailers(t);
    }, [videos]);

    
    return(
        <BlockWrapper>
            <BlockTitle>
                {title}
            </BlockTitle>
            {trailers && <Carousel
                responsive={responsive}
                ssr={true}
            >
                {trailers.map((video: API.Video) => {
                    return (
                        <VideoCard video={video} key={video.id} />
                    )
                })}
            </Carousel>}
        </BlockWrapper>
    )
}

export default VideoBlock;