import TrendingList from '../../components/ShopList/ShopList';
import { allShop } from '../../utils/db-api';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import { HomeContainer } from './Home.styled';

const Home = () => {
  const [shop, setShop] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    allShop()
      .then(api => setShop(api))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <HomeContainer>
      <ToastContainer />
      <h2>Shops fast-food</h2>
      {load && <Loader />}
      <TrendingList shop={shop} />
    </HomeContainer>
  );
};

export default Home;
