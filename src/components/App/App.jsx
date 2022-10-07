import {lazy} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { Home } from '../../Pages/Home';
// import { Movies } from '../../Pages/Movies';
// import { MoviesDetails } from '../../Pages/MoviesDetails';
// import { Cast } from '../Cast';
// import { Reviews } from '../Reviews';

const Movies = lazy(() => import('../../Pages/Movies').then(module => ({
	...module,
	default: module.Movies,
})));

const MoviesDetails = lazy(() => import('../../Pages/MoviesDetails').then(module => ({
	...module,
	default: module.MoviesDetails,
})));

const Cast = lazy(() => import('../Cast').then(module => ({
	...module,
	default: module.Cast,
})));

const Reviews = lazy(() => import('../Reviews').then(module => ({
	...module,
	default: module.Reviews,
})));


export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Navigate to="home" />} />
				<Route path="home" element={<Home />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:moviesId" element={<MoviesDetails />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<Navigate to="home" />}></Route>
			</Route>
		</Routes>
	);
};
