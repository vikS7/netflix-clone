export const tmbdConfig = {
    host: process.env.TMDB_HOST,
    key: process.env.TMDB_KEY,
    imageHost: "https://image.tmdb.org/t/p",
}

export const db = <T>(endpoint: string, params = ""): Promise<T> => {
    return fetch(`${tmbdConfig.host}${endpoint}?api_key=${tmbdConfig.key}&language=en-US${params}`)
        .then(res => res.json())
        .catch(console.log);
};