import { API } from '@base/types';
import { db } from './config';
import { LIST_TYPE, MEDIA_TYPE, RATINGS_TYPE } from '../contants';

export const getById = async (
    id: any,
    media_type: MEDIA_TYPE,
    includeVideo: boolean = false,
): Promise<API.ShowDetails> => {
    const results = await db<API.ShowDetails>(
        `${media_type}/${id}`,
        includeVideo ? '&append_to_response=videos' : undefined,
    );
    return results;
};

export const getShows = async (
    media_type: MEDIA_TYPE,
    ratings_type: RATINGS_TYPE[],
    params?: string,
) => {
    const results = <Record<RATINGS_TYPE[number], API.Show[]>>{};

    const promises = ratings_type.map((r) => db<API.Page<API.Show>>(`${media_type}/${r}`, params));

    const res = await Promise.allSettled(promises);

    const response = res.map((result) => {
        return result.status === 'fulfilled'
            ? result.value?.results?.map((item) => ({ ...item, media_type }))
            : [];
    });

    ratings_type.forEach((r, i) => (results[r] = response[i]));

    return results;
};

export const getCredits = async (id: any, media_type: MEDIA_TYPE): Promise<API.Credit> => {
    const results = await db<API.Credit>(`${media_type}/${id}/credits`);
    return results;
};

export const getTvSeasons = async (id: any, season_number: any): Promise<API.SeasonDetails> => {
    const results = await db<API.SeasonDetails>(`tv/${id}/season/${season_number}`);
    return results;
};

export const getList = async (
    id: any,
    media_type: MEDIA_TYPE,
    list_type: LIST_TYPE[],
    params?: string,
) => {
    const results = <Record<LIST_TYPE[number], API.Show[]>>{};

    const promises = list_type.map((f) =>
        db<API.Page<API.Show>>(`${media_type}/${id}/${f}`, params),
    );
    const res = await Promise.allSettled(promises);

    const response = res.map((result) => {
        return result.status === 'fulfilled'
            ? result.value?.results?.map((item) => ({ ...item, media_type }))
            : [];
    });

    list_type.forEach((l, i) => {
        results[l] = response[i];
    });

    return results;
};

export const getTrending = async (
    media_type: MEDIA_TYPE,
    time_window: 'day' | 'week' = 'day',
): Promise<API.Show[]> => {
    const { results } = await db<API.Page<API.Show>>(`trending/${media_type}/${time_window}`);
    return results;
};

export const searchQuery = async (query: string): Promise<API.Show[]> => {
    const { results } = await db<API.Page<API.Show>>('search/multi', `&query=${query}`);
    return results;
};
