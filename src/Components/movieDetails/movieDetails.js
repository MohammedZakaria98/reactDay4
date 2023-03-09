import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/axiosInstance';
const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axiosInstance.get(`/movie/${id}`).then((res) => {
            console.log(res);
            setMovie(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (
        <Card className='col-8 mx-auto'>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="danger">Go To Watch</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieDetails;
