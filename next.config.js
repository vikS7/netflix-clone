/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'i.ytimg.com'],
  },
  env: {
    TMDB_KEY:"aa564dd4d2f13bb573637ce15c0b75ff",
    TMDB_HOST:"https://api.themoviedb.org/3/"
  }
}
