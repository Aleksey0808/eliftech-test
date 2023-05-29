import SearchForm from 'components/SearchForm/SearchForm';
import { MovieContainer } from './Movies.styled';

const Movies = ({ cart }) => {
  return (
    <MovieContainer>
      <SearchForm cart={cart} />
    </MovieContainer>
  );
};

export default Movies;
