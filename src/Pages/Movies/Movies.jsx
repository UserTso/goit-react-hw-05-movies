import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axiosGetSearchFilms, IMAGE_URL } from '../../components/Api';
import {Form, Input, Button, List, Item, Image} from './Movies.styled';

export const Movies = () => {
	const [name, setName] = useState(null);
	const [films, setFilms] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


	const query = searchParams.get('query');

	useEffect(() => {
		if (!query) {
			return;
		}
		axiosGetSearchFilms(query)
			.then(({ data }) => {
				setFilms(data.results);
			})
			.catch(error => {
				console.log(error);
				<h3>Sorry, this movie not found...</h3>;
			});
	}, [query]);

	const changeInput = event => {
		const query = event.target.value;
		setName(query !== '' ? { query } : {});
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		setSearchParams(name);
		event.target.reset();
	};

	return (
		<>
			<Form onSubmit={handleFormSubmit}>
				<Input type="text" onChange={changeInput} />
				<Button type="submit">Search</Button>
			</Form>
		<div>
			<List>
				{films &&
					films.map(({id, title, poster_path}) => {
						return (
							<Link key={id} to={`/movies/${id}`} state={{from: location}}>
								<Item>
									<Image
										src={`${IMAGE_URL}${poster_path}`}
										alt={title}
									/>
									{/* {title} */}
								</Item>
							</Link>
						);
					})}
			</List>
			</div>
			<Outlet />
		</>
	);
};
