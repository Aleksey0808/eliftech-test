import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const Layout = lazy(() => import('./Layout/Layout'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Movies />} />
          <Route path="shop/:_id" element={<MovieDetails />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
