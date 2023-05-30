import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { goodsShop } from '../../utils/db-api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import Movies from '../../pages/Movies';

import {
  Icon,
  Container,
  Title,
  Text,
  SubTitle,
  List,
  MovieLink,
} from './MovieDetails.styled';

const LOCAL_STORAGE_ADD = 'add';

const MovieDetails = () => {
  const [cartProducts, setCartProducts] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADD)) || []
  );
  // const [addCart, setAddCart] = useState(false);
  const [products, setProducts] = useState([]);
  const { _id } = useParams();
  const [load, setLoad] = useState(false);

  // let localList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ADD));
  // console.log(products);
  // console.log(products);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ADD, JSON.stringify(cartProducts));
    setLoad(true);
    goodsShop(_id)
      .then(id => setProducts(id))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [_id, cartProducts]);

  // const handleClickButton = e => {
  //   const option = e.target.name;
  //   setOrder(prevState => [option, ...prevState]);
  // };

  const handleAddProductToCart = productID => {
    console.log(productID)
    setCartProducts([...cartProducts, productID]);
  };

  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(id => id !== productID);
    setCartProducts(newCartProducts);
  };

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movie');

  // console.log(products.menu);

  return (
    <Container>
      <ToastContainer />

      <Link to={backLinkHref.current}>
        {' '}
        <Icon />
      </Link>
      {load && <Loader />}
      <div>
        <Title>{products.name}</Title>

        <SubTitle>Overview</SubTitle>
        <SubTitle>Genres</SubTitle>
        <List>
          {products.menu
            ? products.menu.map(({ id, dish, favorite }) => {
                let haveInCart = false;
                cartProducts.forEach(productID => {
                  if (productID === id) {
                    haveInCart = true;
                  }
                });
                return (
                  <li key={id}>
                    <Text>{dish}</Text>
                    <Text>{favorite}</Text>
                    {!haveInCart ? (
                      <button
                        onClick={() => handleAddProductToCart(id)}
                        type="primary"
                      >
                        add to cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveFromCart(id)}
                        type="primary"
                      >
                        delete from cart
                      </button>
                    )}
                  </li>
                );
              })
            : 'Sorry, we don`t have any cast information for this movie'}
        </List>

        <List>
          <h1>shopping cart</h1>
          {/* {cartProducts.length > 0
            ? cartProducts.map(productID => {
                const productIndex = products.menu.findIndex(product => {
                  return product.id === productID;
                });
                let { dish, id } = products.menu[productIndex];
                console.log(productIndex)
                return (
                  <li title={dish} key={id}>
                    {dish}
                  </li>
                );
              })
            : 'your shopping cart is null! :('} */}
        </List>
      </div>
      {/* <Movies cart={cartProducts} /> */}
      {/* <MovieLink to={`/cart`} state={cartProducts}>
        shopping cart
      </MovieLink> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
