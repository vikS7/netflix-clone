import { API } from '@base/types';
import moment from 'moment';
import { tmbdConfig } from './api/config';

export const _getPosterURL = (backdrop_path?: String, size: API.ImageSize = 'original') => {
    return `${tmbdConfig.imageHost}/${size}${backdrop_path}`;
};

export const shuffleArray = <T>(array: T[]): Array<T> => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const formatDate = (date: string): string => moment(date).format('MMMM Do YYYY');

export const _getTrailerUrl = (show: API.ShowDetails) => {
    const key = show.videos?.results.find((f) => ["Teaser", "Trailer"].includes(f.type))?.key;
    if (!key) return undefined;
    return `https://www.youtube.com/watch?v=${key}`;
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

