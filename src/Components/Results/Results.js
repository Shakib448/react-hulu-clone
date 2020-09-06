import React, { useState, useEffect } from 'react';
import './Results.css'
import VideoCard from '../VideoCard/VideoCard';
import AxiosConfig from '../AxiosConfig/AxiosConfig';
import FlipMove from 'react-flip-move';

const Results = ({ selectedOption }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await AxiosConfig.get(selectedOption)
                const data = res.data.results;
                setMovies(data);
                return res;
            } catch (error) {
                console.log(error)
            }

        }

        fetchMovie();
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove>
                {
                    movies.map((movie) => (
                        <VideoCard movie={movie} key={movie.id} />

                    ))
                }
            </FlipMove>

        </div>
    );
}

export default Results;
