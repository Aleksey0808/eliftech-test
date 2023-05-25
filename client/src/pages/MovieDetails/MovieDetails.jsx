import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { goodsShop } from '../../utils/db-api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';

import { Icon, Container, Title, Text, SubTitle } from './MovieDetails.styled';

const MovieDetails = () => {
  const [shop, setShop] = useState([]);
  const { _id } = useParams();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    goodsShop(_id)
      .then(id => setShop(id))
      .catch(error => {
        toast.error('Error ofrequast!', { autoClose: 1500 });
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [_id]);

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
        <Title>{shop.name}</Title>

        <SubTitle>Overview</SubTitle>
        <Text>{shop._id}</Text>
        <SubTitle>Genres</SubTitle>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
