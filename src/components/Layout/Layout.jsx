import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Header, Link,} from './Layout.styled';


export const Layout = () => {
    return (
        <Container>
            <Header>
    <nav>
        <Link to="home">
          Home
        </Link>
        <Link to="movies">
          Movies
          </Link>
        
      </nav>
      </Header>

      <Suspense fallback={null}>
				<Outlet />
			</Suspense>
            </Container>
    )
}
