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

import { allShop } from '../../utils/db-api';

const SearchForm = () => {
  // const [movies, setMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);

  const LOCAL_STORAGE_ADD = 'add';
  const cartProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADD));
  console.log(cartProducts);

  useEffect(() => {
    setLoad(true);
    allShop()
      .then(data => setProducts(data))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  const handleSubmit = (query, { resetForm }) => {
    //   if (!query.query.trim()) {
    //     toast.error('Enter a request!', { autoClose: 1500 });
    //     setLoad(false);
    //   } else {
    //     setLoad(true);
    //     const searchMovie = query !== '' ? query : {};
    //     setSearchParams(searchMovie);
    //     resetForm();
    //   }
  };

  // useEffect(() => {
  //   const movieTitle = searchParams.get('query') ?? '';
  //   if (movieTitle) {
  //     searchMovies(movieTitle)
  //       .then(api =>
  //         api.results.length
  //           ? setMovies(api.results)
  //           : toast.error('Nothing was found matching your search!', {
  //               autoClose: 1500,
  //             })
  //       )
  //       .catch(error => {
  //         toast.error('Error of requast!', { autoClose: 1500 });
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         setLoad(false);
  //       });
  //   }
  // }, [searchParams]);

  const initialValues = {
    query: '',
  };

  return (
    <Wrapper>
      hello
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
      {/* {searchParams ? (
        <TrendingList movies={movies} />
      ) : (
        toast.error('error', { autoClose: 1500 })
      )} */}
      <div>
        <h1>{products.name}</h1>

        <h2>Overview</h2>
        <h2>Genres</h2>
        <ul>
          {cartProducts
            ? products.map(({ menu }) => {
                // console.log(menu);
               return menu.map(({id}) => {
                  const productIndex = cartProducts.findIndex(productId => {
                    return id === productId;
                  })
                  if (menu[productIndex]) {
                    let { dish,id } = menu[productIndex];
                    console.log(id)
                     return (
                        <li key={id}>
                          <p>{dish}</p>
                        </li>
                );
                  }
                  
                 
                  console.log("bug!")
                });

                // return (
                //   <li key={menu.id}>
                //     <p>{menu.dish}</p>
                //     <p>{menu.favorite}</p>
                //   </li>
                // );
              })
            : 'Sorry, we don`t have any cast information for this movie'}
        </ul>
      </div>
    </Wrapper>
  );
};

SearchForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
