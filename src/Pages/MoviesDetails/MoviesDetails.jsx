import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import {axiosGetMomiesDetails, IMAGE_URL} from '../../components/Api';
import {Box, Image, Title, Text, Subtitle, Pretitle, Item, Smalltitle, List, Itemlink, Link} from './MoviesDetails.styled'


export const MoviesDetails = () => {
    const {moviesId} = useParams();
    const [film, setFilm] = useState(null);
    const location = useLocation();
    const goBack = location.state?.from ?? '/movies';

    useEffect(() => {
        axiosGetMomiesDetails(moviesId).then(({data}) => {setFilm(data)});
      }, [moviesId]) 

    return (
        <>
        {film && <Box>
            <Image src={`${IMAGE_URL}${film.poster_path}`} alt={film.title} />
            <div>
            <Title>{film.title} {film.release_date.slice(0, 4)}</Title>
            <Text>User Score: {film.vote_average.toFixed(1)}/10</Text>
            <Subtitle>Overview</Subtitle>
            <Text>{film.overview}</Text>
            <Pretitle>Genres</Pretitle>
            <ul>{film.genres.map((genre) => {
                return (
                    <Item key={genre.id}>{genre.name}</Item>
                )
            })}</ul>
            </div>
        </Box>}

        <Smalltitle>Additional information</Smalltitle>

            <List>
                <Itemlink><Link to={goBack}>Go Back</Link></Itemlink>
                <Itemlink><Link to="cast" state={{from: location.state?.from}}>Cast</Link></Itemlink>
                <Itemlink><Link to="reviews" state={{from: location.state?.from}}>Reviews</Link></Itemlink>
            </List>
            <Outlet />
        </>
    )
}