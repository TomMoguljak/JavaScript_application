var api = {
    url: 'https://api.themoviedb.org/3/',
    key: '91ea780738df7ce8aa6cddf5c2cc5899',

    fetchMovies: function (type, page) {
        switch (type) {
            case 'popular':
                return this.fetchPopularMovies(page);
            case 'now-playing':
                return this.fetchNowPlayingMovies(page);
            case 'top-rated':
                return this.fetchTopRatedMovies(page);
            case 'upcoming':
                return this.fetchUpcomingMovies(page);
            default:
                return Promise.reject('Invalid request type');
        }
    },

    fetchPopularMovies: function (page) {
        return fetch(this.url + 'movie/popular?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchTrending: function (page) {
        return fetch(this.url + 'trending/all/week?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchNowPlayingMovies: function (page) {
        return fetch(this.url + 'movie/now_playing?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchTopRatedMovies: function (page) {
        return fetch(this.url + 'movie/top_rated?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchUpcomingMovies: function (page) {
        return fetch(this.url + 'movie/upcoming?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchMovie: function (id) {
        return fetch(this.url + 'movie/' + id + '?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    searchMovies: function (query, page) {
        return fetch(this.url + 'search/movie?api_key=' + this.key + '&query=' + query + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchShows: function (type, page) {
        switch (type) {
            case 'popular':
                return this.fetchPopularShows(page);
            case 'top-rated':
                return this.fetchTopRatedShows(page);
            case 'on-the-air':
                return this.fetchOnAirShows(page);
            case 'airing-today':
                return this.fetchAiringTodayShows(page);
            default:
                return Promise.reject('Invalid request type');
        }
    },

    fetchPopularShows: function (page) {
        return fetch(this.url + 'tv/popular?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchTopRatedShows: function (page) {
        return fetch(this.url + 'tv/top_rated?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchOnAirShows: function (page) {
        return fetch(this.url + 'tv/on_the_air?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchAiringTodayShows: function (page) {
        return fetch(this.url + 'tv/airing_today?api_key=' + this.key + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchShow: function (id) {
        return fetch(this.url + 'tv/' + id + '?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    searchShows: function (query, page) {
        return fetch(this.url + 'search/tv?api_key=' + this.key + '&query=' + query + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    searchPeople: function (query, page) {
        return fetch(this.url + 'search/person?api_key=' + this.key + '&query=' + query + '&page=' + page)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    search: function (type, query, page) {
        switch (type) {
            case 'movies':
                return this.searchMovies(query, page);
            case 'shows':
                return this.searchShows(query, page);
            case 'people':
                return this.searchPeople(query, page);
            default:
                return Promise.reject('Invalid request type');
        }
    },

    fetchPerson: function (id) {
        return fetch(this.url + 'person/' + id + '?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchPersonMovies: function (id) {
        return fetch(this.url + 'person/' + id + '/movie_credits?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchPersonShows: function (id) {
        return fetch(this.url + 'person/' + id + '/tv_credits?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchMovieCredits: function (id) {
        return fetch(this.url + 'movie/' + id + '/credits?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    },

    fetchShowCredits: function (id) {
        return fetch(this.url + 'tv/' + id + '/credits?api_key=' + this.key)
            .then(function (response) {
                if (!response.ok) return Promise.reject("Error from the API: " + response.status);
                return response.json();
            });
    }
};