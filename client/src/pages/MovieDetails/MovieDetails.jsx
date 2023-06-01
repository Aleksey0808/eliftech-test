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

  const [products, setProducts] = useState([]);
  const { _id } = useParams();
  const [load, setLoad] = useState(false);

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
    
    setCartProducts([...cartProducts, productID ]);
  };

  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(
      item => item.id !== productID.id
    );
    setCartProducts(newCartProducts);
  };

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movie');

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
            ? products.menu.map(item => {
                let haveInCart = false;
                cartProducts.forEach(productID => {
                  if (productID.id === item.id) {
                    haveInCart = true;
                  }
                });
                return (
                  <li key={item.id}>
                    <Text>{item.dish}</Text>
                    <Text>{item.favorite}</Text>
                    {!haveInCart ? (
                      <button
                        onClick={() => handleAddProductToCart({...item, count: 1})}
                        type="primary"
                      >
                        add to cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveFromCart(item)}
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

      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
