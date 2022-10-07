import { Suspense } from 'react';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axiosGetSearchFilms, IMAGE_URL } from '../../Api';
import { Form, Input, Button, List, Item, Image } from './Movies.styled';

export const Movies = () => {
	const [name, setName] = useState('');
	const [films, setFilms] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const query = searchParams.get('query');
	// console.log('query', query)

	useEffect(() => {
		query &&
			axiosGetSearchFilms(query)
				.then(({ data }) => {
					if (data.results?.length) {
						setFilms(data.results);
					} else {
						alert('Enter correct query');
					}
				})
				.catch(error => {
					console.log(error);
				});
	}, [query]);

	const changeInput = event => {
		const query = event.target.value;

		setName({ query });
	};

	const handleCheckSubmit = event => {
		const { query } = name;
		if (!query) {
			return alert('Please, enter your request)');
		}
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		handleCheckSubmit();
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
						films.map(({ id, title, poster_path }) => {
							return (
								<Link key={id} to={`/movies/${id}`} state={{ from: location }}>
									<Item>
										<Image src={`${IMAGE_URL}${poster_path}`} alt={title} />
										{/* {title} */}
									</Item>
								</Link>
							);
						})}
				</List>
			</div>
			<Suspense fallback={<h2>Loading...</h2>}>
				<Outlet />
			</Suspense>
		</>
	);
};


