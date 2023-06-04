import SearchForm from 'components/CartForm/CartForm';
import { MovieContainer } from './Shop.styled';

const Shop = ({ cart }) => {
  return (
    <MovieContainer>
      <SearchForm cart={cart} />
    </MovieContainer>
  );
};

export default Shop;
