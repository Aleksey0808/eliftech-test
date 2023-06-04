import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Shops = lazy(() => import('../pages/Shop/Shop'));

const ShopDetails = lazy(() => import('../pages/ShopDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const Layout = lazy(() => import('./Layout/Layout'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Shops />} />
          <Route path="shop/:_id" element={<ShopDetails />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
