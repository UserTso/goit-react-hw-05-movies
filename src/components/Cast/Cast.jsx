import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {axiosGetMovieActors, IMAGE_URL} from '../../Api';
import {List, Item, Text} from './Cast.styled';

export const Cast = () => {
    const {moviesId} = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        axiosGetMovieActors(moviesId).then(({data}) => {setActors(data.cast.slice(0,5))});
      }, [moviesId]) 
  

    return (
        <>
         {actors?.length ? (<List>{actors.map((actor) => {
            return (
                <Item key={actor.name}>
                <img src={`${IMAGE_URL}${actor.profile_path}`} alt={actor.name} />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
            </Item>
            )
         })}
        </List>) : (<Text>We don't have any information for actors.</Text>)}
        </>
       
    )
}