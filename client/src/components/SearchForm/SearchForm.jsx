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
  Forma,
  Label,
  Text,
  Title,
  List,
  Item,
  Quantity,
  Button,
  Count,
  NameProduct,
  RemoveFromCart,
  WrapperCart,
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
  const [form, setForm] = useState([]);
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
    const newCartProducts = cartProducts.filter(
      item => item.id !== productID.id
    );
    setCartProducts(newCartProducts);
  };

  const countI = product => {
    const newCount = product.count + 1;

    setCartProducts([...cartProducts], (product.count = newCount));
  };

  const countD = product => {
    const newCount = product.count - 1;
    setCartProducts([...cartProducts], (product.count = newCount));
  };

  const handleSubmit = (query, { resetForm }) => {
    if (!query) {
      console.log('error');
      toast.error('Enter a request!', { autoClose: 1500 });
      setLoad(false);
    } else {
      setForm([{ user: query, cart: cartProducts }]);
      console.log(form);

      resetForm();
    }
  };

  const totalPrice = () => {
    return cartProducts.reduce((acc, item) => acc + item.price * item.count, 0);
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
                pattern="[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
                title="email must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage name="email" component="div" />
            </Label>

            <button type="submit">Checkout</button>
          </Forma>
        </Formik>
      }
      {
        <div>
          <Text>total price:{totalPrice()}</Text>
        </div>
      }
      {/* {load && <Loader />} */}
      {/* {searchParams ? (
        <TrendingList movies={movies} />
      ) : (
        toast.error('error', { autoClose: 1500 })
      )} */}
      <WrapperCart>
        {/* <Title>Shopping cart</Title> */}

        <List>
          {cartProducts.length > 0
            ? cartProducts.map(item => {
                return (
                  <Item title={item.dish} key={item.id}>
                    <NameProduct>{item.dish}</NameProduct>
                    <Text>price:{item.price}</Text>
                    <Quantity>
                      {<Button onClick={() => countD(item)}>-</Button>}
                      <Count>{item.count}</Count>
                      {<Button onClick={() => countI(item)}>+</Button>}
                    </Quantity>
                    {
                      <RemoveFromCart
                        onClick={() => handleRemoveFromCart(item)}
                        type="primary"
                      >
                        delete
                      </RemoveFromCart>
                    }
                  </Item>
                );
              })
            : 'cart is empty! :('}
        </List>
      </WrapperCart>
    </Wrapper>
  );
};

SearchForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
