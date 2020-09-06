const API_KEY = '19f84e11932abbc79e6d83f82d6d1045';


const Request = {
    fetchTrending  : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMystery : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}

export default Request;