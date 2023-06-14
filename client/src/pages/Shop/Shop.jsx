import CartForm from 'components/CartForm/CartForm';
import { ShopContainer } from './Shop.styled';

const Shop = ({ cart }) => {
  return (
    <ShopContainer>
      <CartForm cart={cart} />
    </ShopContainer>
  );
};

export default Shop;
