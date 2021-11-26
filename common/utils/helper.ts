import {tmbdConfig} from './api/config';

export const _getPosterURL = (backdrop_path: String, size: String = "w500") => {
    return `${tmbdConfig.imageHost}/${size}${backdrop_path}`;
}

export const recordArrayToRecord = (arr: Record<any, any>[]): Record<any, any> => {
    return arr.reduce((map, results) => {
        return { ...map, ...results };
    }, {});
};

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 2024 },
      items: 9,
      slidesToSlide: 5 // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 2024, min: 1750 },
      items: 8,
      slidesToSlide: 5
    },
    desktop3: {
     breakpoint: { max: 1740, min: 1300 },
      items: 6,
      slidesToSlide: 5
    },
    desktop4: {
        breakpoint: { max: 1300, min: 1204 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1204, min: 980 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 980, min: 400 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile2: {
        breakpoint: { max: 400, min: 0 },
        items: 2,
        slidesToSlide: 1 
    }
};