import { recordArrayToRecord } from '../helper';
import { API } from '../types/api';
import {db} from './config';

export const getMoviesPopular = async (): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>("movie/popular");
    return results;
}

export const getTrendingAll = async (): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>("trending/all/week");
    return results;
}

export const getMovieById = async (id: any): Promise<API.ShowDetails> => {
    const results = await db<API.ShowDetails>(`movie/${id}`, "&append_to_response=videos");
    return results;
}

export const getTvById = async (id: string): Promise<API.ShowDetails> => {
    const results = await db<API.ShowDetails>(`tv/${id}`, "&append_to_response=videos");
    return results;
}

export const getTvSeasons = async (id: any, season_number: any): Promise<API.SeasonDetails> => {
    const results = await db<API.SeasonDetails>(`tv/${id}/season/${season_number}`);
    return results;
}

export const getTopRatedTv = async (): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>("tv/top_rated");
    return results;
} 

export const getTopRatedMovie = async (): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>("movie/top_rated");
    return results;
}

export const getSimilarTvShows = async (id: any): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>(`tv/${id}/similar`);
    return results;
}

export const getSimilarMovieShows = async (id: any): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>(`movie/${id}/similar`);
    return results;
}

export const getGenres = async (): Promise<API.Genre[]> => {
    const { genres } = await db<API.GenreList>(`/genre/tv/list`);
    return genres;
};

export const searchQuery = async (query: string): Promise<API.Show[]> => {
    const {results} = await db<API.Page<API.Show>>("search/multi", `&query=${query}`);
    return results;
}