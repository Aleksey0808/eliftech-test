import { Link, useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { goodsShop } from '../../utils/db-api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';

import {
  Icon,
  Container,
  Title,
  List,
  Cart,
  NameProduct,
  Price,
  Item,
} from './MovieDetails.styled';

const LOCAL_STORAGE_ADD = 'add';

const ShopDetails = () => {
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

  const handleAddProductToCart = productID => {
    setCartProducts([...cartProducts, productID]);
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
      {load && <Loader />}
      <ToastContainer />

      <Link to={backLinkHref.current}>
        {' '}
        <Icon />
      </Link>

      <div>
        <Title>{products.name}</Title>
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
                  <Item key={item.id}>
                    <NameProduct>{item.dish}</NameProduct>
                    <Price>price:{item.price}</Price>
                    {!haveInCart ? (
                      <Cart
                        onClick={() =>
                          handleAddProductToCart({ ...item, count: 1 })
                        }
                        type="primary"
                      >
                        add to cart
                      </Cart>
                    ) : (
                      <Cart
                        onClick={() => handleRemoveFromCart(item)}
                        type="primary"
                      >
                        delete from cart
                      </Cart>
                    )}
                  </Item>
                );
              })
            : 'Sorry, we don`t have any cast information for this movie'}
        </List>
      </div>
    </Container>
  );
};

export default ShopDetails;
