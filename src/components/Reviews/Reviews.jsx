import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {axiosGetReviewsFilms} from '../../components/Api';
import {List, Item, Text} from './Reviews.styled';

export const Reviews = () => {

    const {moviesId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosGetReviewsFilms(moviesId).then(({data}) => {setReviews(data.results)});
      }, [moviesId]) 
   

    return (
        <> 
        
        {reviews?.length ? (<List> {reviews.map(({author, content, id}) => (
            <Item key={id}><div><b>Author:</b> {author}</div>
            <Text>{content}</Text></Item>
        ))}</List>) : (<Text>We don't have any reviews for this movie.</Text>)}
        </>
       
    )
}