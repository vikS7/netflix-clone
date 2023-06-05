const MEDIA_TYPE = ['all', 'movie', 'tv', 'people'] as const;

const RATINGS_TYPE = [ 'top_rated', 'popular', 'now_playing', 'on_the_air', 'upcoming', 'airing_today'] as const;

const LIST_TYPE = ["similar", "recommendations"] as const;

export type MEDIA_TYPE = (typeof MEDIA_TYPE)[number];

export type RATINGS_TYPE = (typeof RATINGS_TYPE)[number];

export type LIST_TYPE = (typeof LIST_TYPE)[number];
