import { useState } from "react";
import styled from "styled-components";
import { CardBackground, CardContent, CardOverview, CardTitle, CardWrapper, IconContainer } from "../../common/styles/globalStyles";
import { SearchIcon, StarIcon } from "../../common/styles/icons";
import { searchQuery } from "../../common/utils/api/api";
import { _getPosterURL } from "../../common/utils/helper";
import { API } from "../../common/utils/types/api";
import Image from 'next/image';
import { useRouter } from "next/router";

const Wrapper = styled.div`
    min-width: 75rem;
    margin: 8rem 8rem;
    height: 40rem;
    font-family: 'Outfit';
`;

const SearchWrapper = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
`;

const Input = styled.input`
    width: 100%;
    margin-left: 10px;
    height: 100%;
    color: white;
    background-color: rgba(0,0,0,0.1);
    outline: none;
    border: none;
    font-size: 2rem;
`;

const ResultWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7,2fr);
    row-gap: 1em;
`;

const Search = () => {
    
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<API.Show[]>();

    const onInputChange = async (value: string) => {
        setQuery(value);
    }

    const onQueryInput = async (event:any) => {
        event.preventDefault();
        let temp = await searchQuery(query);
        setResults(temp.filter(x => x.poster_path));
    }

    const navigateToDetails = (show: API.Show) => {
        let route = show.media_type == 'tv' ? 'tv' : 'movie';
        router.push(`/${route}/${show.id}`);
    }

    return (
        <Wrapper>
            <SearchWrapper>
                <IconWrapper>
                    <SearchIcon fill={'red'} />
                </IconWrapper>
                <form style={{display: 'flex'}} onSubmit={(event) => onQueryInput(event)}>
                    <Input type="text" placeholder="Search..." onChange={(e) => onInputChange(e.target.value)} value={query}/>
                    <button type="submit" style={{opacity: '0'}}>Submit</button>
                </form>
            </SearchWrapper>
            <ResultWrapper>
                {results && results.map((show: API.Show) => {
                    return(
                            <CardWrapper key={show.id} onClick={() => navigateToDetails(show)} >
                                <CardBackground>
                                    {show.poster_path && 
                                        <Image
                                            src={_getPosterURL(show.poster_path)}
                                            alt={ show.name ? show.name : show.original_title }
                                            layout="fill"
                                            objectFit="cover"
                                            unoptimized 
                                        />
                                    }
                                </CardBackground>
                                <CardContent>
                                    <CardTitle>
                                        { show.name ? show.name : show.original_title}
                                        <div style={{marginTop: '10px', fontSize: '0.9rem', fontWeight: "300"}}>
                                            {show.media_type == 'tv'? "TV" : "Movie"}
                                        </div>
                                        <div style={{marginTop: '10px', fontSize: '0.8rem', fontWeight: "200"}}>
                                            {show.overview.length > 100 ? show.overview.substring(0,100) + "..." : show.overview}
                                        </div>
                                    </CardTitle>
                                    <CardOverview>
                                        <div style={{marginBottom: '10px'}}>
                                            {show.release_date ? new Date(show.release_date).getFullYear() : new Date(show.first_air_date).getFullYear()}
                                        </div>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <IconContainer>
                                                <StarIcon />
                                            </IconContainer>
                                            <div style={{marginLeft: '8px'}}>
                                                {show.vote_average}
                                            </div>
                                        </div>
                                    </CardOverview>
                                </CardContent>
                        </CardWrapper>
                    )
                })}
            </ResultWrapper>
        </Wrapper>
    )
}

export default Search;