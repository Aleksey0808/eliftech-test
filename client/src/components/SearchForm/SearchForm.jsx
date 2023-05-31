import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { searchMovies } from '../../utils/ApiService';
// import TrendingList from 'components/TrendingList/TrendingList';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import {
  Wrapper,
  // Input,
  // Icon,
  // SearchButton,
  Forma,
  Label,
  Text,
} from './SearchForm.styled';

import { allShop } from '../../utils/db-api';

const LOCAL_STORAGE_ADD = 'add';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().required(),
  email: yup.string().required(),
});

const SearchForm = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADD)) || []
  );
  // console.log(cartProducts)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ADD, JSON.stringify(cartProducts));
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
  }, [cartProducts]);

  const handleRemoveFromCart = productID => {
    console.log(productID);
    const newCartProducts = cartProducts.filter(
      item => item.id !== productID.id
    );
    setCartProducts(newCartProducts);
  };

  const countI = product => {
    const newCount = product.count + 1;
    console.log(product);

    setCartProducts([...cartProducts], (product.count = newCount));
  };

  const countD = product => {
    const newCount = product.count - 1;
    setCartProducts([...cartProducts], (product.count = newCount));
  };

  const handleSubmit = (query, { resetForm }) => {
    if (!query.query.trim()) {
      console.log(query);
      toast.error('Enter a request!', { autoClose: 1500 });
      setLoad(false);
    } else {
      setLoad(true);
      // const searchMovie = query !== '' ? query : {};

      resetForm();
    }
  };

  const initialValues = {
    name: '',
    number: '',
    email: '',
  };

  return (
    <Wrapper>
      <ToastContainer />
      {
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Forma>
            <Label htmlFor="name">
              <Text>Name</Text>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage name="name" component="div" />
            </Label>

            <Label htmlFor="number">
              <Text>Phone</Text>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage name="number" component="div" />
            </Label>

            <Label htmlFor="number">
              <Text>Email</Text>
              <Field
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="email must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage name="email" component="div" />
            </Label>

            <button type="submit">Checkout</button>
          </Forma>
        </Formik>
      }
      {load && <Loader />}
      {/* {searchParams ? (
        <TrendingList movies={movies} />
      ) : (
        toast.error('error', { autoClose: 1500 })
      )} */}
      <div>
        <h1>{products.name}</h1>

        <h2>Shopping cart</h2>

        <ul>
          {cartProducts.length > 0
            ? cartProducts.map(item => {
                return (
                  <li title={item.dish} key={item.id}>
                    <p>{item.dish}</p>
                    {<button onClick={() => countI(item)}>+</button>}
                    {item.count}
                    {<button onClick={() => countD(item)}>-</button>}
                    {
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        type="primary"
                      >
                        delete from cart
                      </button>
                    }
                  </li>
                );
              })
            : 'cart is empty! :('}
        </ul>
      </div>
    </Wrapper>
  );
};

SearchForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
