// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../axiosConfig/axiosInstance';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const FavoriteMovies = (props) => {
//     const [favoriteMovies, setFavoriteMovies] = useState([]);
//     console.log(props);
//     useEffect(() => {
//         axiosInstance
//             .get('/user/favorites') // get the user's favorite movies from the backend
//             .then((res) => {
//                 console.log(res.data);
//                 setFavoriteMovies(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleFavoriteClick = (movie) => {
//         setFavoriteMovies([...favoriteMovies, movie]);
//     };

//     const handleRemoveClick = (movie) => {
//         const updatedFavorites = favoriteMovies.filter(
//             (favMovie) => favMovie.id !== movie.id
//         );
//         setFavoriteMovies(updatedFavorites);
//     };

//     return (
//         <>
//             <p>Number of favorite movies: {props.title.length}</p>
//             <div className='row m-5'>
//                 {props.title.map((movie) => {
//                     const isFavorite = favoriteMovies.some(
//                         (favMovie) => favMovie.id === movie.id
//                     );
//                     return (
//                         <Card className='col-3 mx-auto'>
//                             <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
//                             <Card.Body>
//                                 <Card.Title>{movie.title}</Card.Title>
//                                 <Card.Text>{movie.release_date}</Card.Text>
//                                 <Button variant='info' href={`/movies/${movie.id}`}>Details</Button>
//                                 {isFavorite ? (<Button variant='danger' onClick={() => handleRemoveClick(movie)}>Remove</Button>)
//                                     : (<Button variant='success' onClick={() => handleFavoriteClick(movie)}>Favorite</Button>)}
//                             </Card.Body>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default FavoriteMovies;


import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/axiosInstance';
import FavoriteMovies from '../favoriteMovies/favoriteMovies';
import { useDispatch, useSelector } from 'react-redux';
import favoriteAction from '../../store/Actions/favorite';

const FavMovies = () => {
    // const [movies, setMovies] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const isFav = useSelector(state => state.isFavorite)
    const dispatch = useDispatch()
    // const handleIdFav = () => {
    //     dispatch(favoriteAction(isFav === true ? false : true))
    // }

    console.log(isFav);

    // useEffect(() => {
    //     axiosInstance
    //         .get('/movie/popular', {
    //             params: { page: currentPage },
    //         })
    //         .then((res) => {
    //             // console.log(res.data);
    //             setMovies(res.data.results);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [currentPage]);

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    // const handleFavoriteClick = (movie) => {
    //     setFavoriteMovies([...favoriteMovies, movie]);
    // };

    // const handleFavoriteClick = (movie) => {
    //     let index = isFav.findIndex((element) => element.id === movie.id)
    //     if (index === -1) {
    //         dispatch(favoriteAction([...isFav, movie]))
    //     }
    //     return true
    // };

    const handleRemoveClick = (movie) => {
        let index = isFav.findIndex((element) => element.id = movie.id);
        isFav.splice(index, 1)
        dispatch(favoriteAction([...isFav]))
    };


    return (
        <div className='row m-5'>
            <p>Number of favorite movies: {isFav.length}</p>
            {isFav.map((movie) => {
                const isFavorite = isFav.findIndex((favMovie) => favMovie.id === movie.id);
                console.log(isFav);
                return (
                    <Card className='col-3 mx-auto'>
                        <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.release_date}</Card.Text>
                            <Button variant='info' href={`/movies/${movie.id}`}>Details</Button>
                            <Button variant='danger' onClick={() => handleRemoveClick(movie)}>Remove</Button>
                            <i class="bi bi-star-fill fs-2 text-warning d-flex justify-content-md-end" onClick={() => handleRemoveClick(movie)}></i>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default FavMovies;

