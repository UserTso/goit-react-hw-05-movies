import { useState, useEffect } from 'react';
import {axiosTrend, IMAGE_URL } from '../../components/Api';
import {Link, useLocation} from 'react-router-dom';
import {Main, Title, List, Item, Image} from './Home.styled';

export const Home = () => {
  const location = useLocation();
  const [films, setFilms] = useState(null);


  useEffect(() => {
    axiosTrend().then(({data}) => {setFilms(data.results)});
  }, []) 
  

    return (
      <Main>
         <Title>Trending today</Title>
        {films && <List>
          {films.map((film) => {
            return (
             <Link  key={film.id} to={`/movies/${film.id}`}state={{from:location}}> 
             <Item 
            
             > <Image src={`${IMAGE_URL}${film.poster_path}`} alt={film.title}/>
               {/* <Span>{film.title}</Span> */}
             </Item>
             </Link>
            )
          })}
        </List>}
      </Main>
    );
  };