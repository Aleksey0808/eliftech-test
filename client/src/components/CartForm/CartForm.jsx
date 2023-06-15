import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Modal/Modal';

import {
  Wrapper,
  Forma,
  Label,
  Text,
  List,
  Item,
  Quantity,
  Button,
  Count,
  NameProduct,
  RemoveFromCart,
  WrapperCart,
  Submit,
  Price,
} from './CartForm.styled';

const LOCAL_STORAGE_ADD = 'add';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().required(),
  email: yup.string().required(),
});

const CartForm = () => {
  const [cartProducts, setCartProducts] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADD)) || []
  );
  const [form, setForm] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ADD, JSON.stringify(cartProducts));
  }, [cartProducts]);

  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(
      item => item.id !== productID.id
    );
    setCartProducts(newCartProducts);
  };

  const countIncrement = product => {
    const newCount = product.count + 1;

    setCartProducts([...cartProducts], (product.count = newCount));
  };

  const countDecrement = product => {
    if (product.count > 1) {
      const newCount = product.count - 1;
      setCartProducts([...cartProducts], (product.count = newCount));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (query, { resetForm }) => {
    if (!query) {
      console.log('error');
      toast.error('Enter a request!', { autoClose: 1500 });
    } else {
      const total = cartProducts.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
      setForm({ user: query.name, cart: cartProducts, totalPrice: total });

      setShowModal(true);
      setCartProducts([]);
      resetForm();
    }
  };
  // console.log(form);

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
      <div>
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

              <Submit onClick={() => {}} type="submit">
                Checkout
              </Submit>
            </Forma>
          </Formik>
        }
        {
          <Price>
            <Text>total price:{totalPrice()}</Text>
          </Price>
        }
      </div>
      <WrapperCart>
        <List>
          {cartProducts.length > 0
            ? cartProducts.map(item => {
                return (
                  <Item title={item.dish} key={item.id}>
                    <NameProduct>{item.dish}</NameProduct>
                    <Text>price:{item.price}</Text>
                    <Quantity>
                      {<Button onClick={() => countDecrement(item)}>-</Button>}
                      <Count>{item.count}</Count>
                      {<Button onClick={() => countIncrement(item)}>+</Button>}
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

      {showModal && <Modal onClose={closeModal} form={form} />}
    </Wrapper>
  );
};

CartForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default CartForm;
