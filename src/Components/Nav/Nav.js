import React from 'react';
import './Nav.css';
import Request from '../Request/Request'

const Nav = ({setSelectedOption}) => {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(Request.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchComedyMovie)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchHorrorMovies)}>Horro</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchSciFi)}>Sci-Fi</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(Request.fetchTv)}>Tv Moive</h2>
        </div>
    );
}

export default Nav;
