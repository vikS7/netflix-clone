import styled from 'styled-components';
import { CardBackground, CardContent, CardOverview, CardTitle, CardWrapper } from '../../../styles/globalStyles';
import { API } from "../../../utils/types/api";
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IVideoCard {
    video: API.Video;
}

const VideoCard: React.FC<IVideoCard> = ({video}) => {

    const router = useRouter();

    const onClickHandler = (url: string) => {
        router.push(url);
    }

    return(
        <CardWrapper onClick={() => {onClickHandler(video.url)}}>
            <CardBackground>
                {video.thumbnail_url && 
                    <Image
                        src={video.thumbnail_url}
                        alt={video.name}
                        layout="fill"
                        objectFit="cover" 
                    />
                }
            </CardBackground>
            <CardContent>
                <CardTitle>
                    {video.name}
                </CardTitle>
                <CardOverview>
                    {new Date(video.published_at).toDateString()}
                </CardOverview>
            </CardContent>
        </CardWrapper>
    )
}

export default VideoCard;