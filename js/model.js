function apiModel() {
    let apikey = '91ea780738df7ce8aa6cddf5c2cc5899'
    let url = 'https://api.themoviedb.org/3/'

    let command = {
        getTrending, search, getPopularMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies, getMovieByID,
        getSerieByID, getPopularSeries, getAiringTodaySeries, getOnTheAirSeries, getTopRatedSeries
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
        let date = new Date()
        let year = date.getFullYear()
        let month = String(date.getMonth() + 1).padStart(2, '0')
        let day = String(date.getDate()).padStart(2, '0')
        date = `${year}-${month}-${day}`

        return fetch(`${url}discover/movie?&primary_release_date.gte=${date}&sort_by=popularity.desc&api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getTopRatedMovies(page_index) {
        return fetch(`${url}movie/top_rated?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getPopularSeries(page_index) {
        return fetch(`${url}tv/popular?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getAiringTodaySeries(page_index) {
        return fetch(`${url}tv/airing_today?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getOnTheAirSeries(page_index) {
        return fetch(`${url}tv/on_the_air?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    async function getTopRatedSeries(page_index) {
        return fetch(`${url}tv/top_rated?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    return command
}