function apiModel() {
    let apikey = '91ea780738df7ce8aa6cddf5c2cc5899'
    let url = 'https://api.themoviedb.org/3/'

    let command = {
        getTrending, search, getPopularMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies, getMovieByID, getSerieByID
    }

    async function getTrending() {
        return fetch(`${url}trending/all/week?api_key=${apikey}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function search(input, page_index) {
        return fetch(`${url}search/multi?query=${input}&api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getMovieByID(movie_id) {
        return fetch(`${url}movie/${movie_id}?api_key=${apikey}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getSerieByID(series_id) {
        return fetch(`${url}tv/${series_id}?api_key=${apikey}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getPopularMovies(page_index) {
        return fetch(`${url}movie/popular?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getNowPlayingMovies(page_index) {
        return fetch(`${url}movie/now_playing?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getUpcomingMovies(page_index) {
        return fetch(`${url}movie/upcoming?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getTopRatedMovies(page_index) {
        return fetch(`${url}movie/top_rated?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    return command
}