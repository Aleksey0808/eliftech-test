import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../utils/ApiService';
import TrendingList from 'components/TrendingList/TrendingList';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import { Wrapper, Input, Icon, SearchButton, Forma } from './SearchForm.styled';

const SearchForm = onSubmit => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [load, setLoad] = useState(false);

  const handleSubmit = (query, { resetForm }) => {
    if (!query.query.trim()) {
      toast.error('Enter a request!', { autoClose: 1500 });
      setLoad(false);
    } else {
      setLoad(true);
      const searchMovie = query !== '' ? query : {};
      setSearchParams(searchMovie);
      resetForm();
    }
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query') ?? '';
    if (movieTitle) {
      searchMovies(movieTitle)
        .then(api =>
          api.results.length
            ? setMovies(api.results)
            : toast.error('Nothing was found matching your search!', {
                autoClose: 1500,
              })
        )
        .catch(error => {
          toast.error('Error of requast!', { autoClose: 1500 });
          console.log(error);
        })
        .finally(() => {
          setLoad(false);
        });
    }
  }, [searchParams]);

  const initialValues = {
    query: '',
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Forma>
          <label>
            <Input type="text" name="query" />
          </label>

          <SearchButton type="submit">
            <Icon />
          </SearchButton>
        </Forma>
      </Formik>
      {load && <Loader />}
      {searchParams ? (
        <TrendingList movies={movies} />
      ) : (
        toast.error('error', { autoClose: 1500 })
      )}
    </Wrapper>
  );
};

SearchForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
