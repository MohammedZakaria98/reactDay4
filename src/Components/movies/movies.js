import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/axiosInstance';
import FavoriteMovies from '../favoriteMovies/favoriteMovies';
import { useDispatch, useSelector } from 'react-redux';
import favoriteAction from '../../store/Actions/favorite';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [favoriteMovies, setFavoriteMovies] = useState([]);

    const isFav = useSelector(state => state.isFavorite)
    const dispatch = useDispatch()
    const handleIdFav = () => {
        dispatch(favoriteAction(isFav === true ? false : true))
    }
    console.log(isFav);

    useEffect(() => {
        axiosInstance
            .get('/movie/popular', {
                params: { page: currentPage },
            })
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFavoriteClick = (movie) => {
        let index = isFav.findIndex((element) => element.id === movie.id)
        if (index === -1) {
            dispatch(favoriteAction([...isFav, movie]))
        }
    };

    const handleRemoveClick = (movie) => {
        let index = isFav.findIndex((element) => element.id = movie.id);
        isFav.splice(index, 1)
        dispatch(favoriteAction([...isFav]))
    };

    return (
        <div className='row m-5'>
            {movies.map((movie) => {
                const isFavorite = isFav.some((favMovie) => favMovie.id === movie.id);
                // console.log(isFavorite);
                return (
                    <Card className='col-3 mx-auto'>
                        <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.release_date}</Card.Text>
                            <Button variant='info' href={`/movies/${movie.id}`}>Details</Button>
                            { isFavorite ? (<i class="bi bi-star-fill fs-2 text-warning d-flex justify-content-md-end" onClick={() => handleRemoveClick(movie)}></i>)
                                : (<i class="bi bi-star fs-2 d-flex justify-content-md-end" onClick={() => handleFavoriteClick(movie)}></i>)}
                                {/* <Button variant='danger' onClick={() => handleRemoveClick(movie)}>Remove</Button> */}
                        </Card.Body>
                    </Card>
                );
            })}
            <div className='pagination'>
                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                <button disabled={movies.length === 0} onClick={() => handlePageChange(currentPage + 1)} >Next</button>
            </div>
            <FavoriteMovies />
        </div>
    );
};

export default Movies;