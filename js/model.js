function apiModel() {
    let apikey = '91ea780738df7ce8aa6cddf5c2cc5899'
    let url = 'https://api.themoviedb.org/3/'

    let command = { getTrending, search, getPopularMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies}

    async function getTrending() {
        return fetch(`${url}trending/all/week?language=fr&api_key=${apikey}`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    async function search(input, page_index) {
        return fetch(`${url}search/multi?query=${input}&api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    async function getPopularMovies(page_index) {
        return fetch(`${url}movie/popular?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    async function getNowPlayingMovies(page_index) {
        return fetch(`${url}movie/now_playing?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    async function getUpcomingMovies(page_index) {
        return fetch(`${url}movie/upcoming?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    async function getTopRatedMovies(page_index) {
        return fetch(`${url}movie/top_rated?api_key=${apikey}&page=${page_index}&language=fr`)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

        return command
    }