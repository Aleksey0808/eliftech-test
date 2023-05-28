import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieLink, List } from './TrendingList.styled';

const TrendingList = ({ shop }) => {
  // console.log(shop);
  const location = useLocation();

  return (
    <div>
      <List>
        {shop.map(({ _id, name }) => (
          <li key={_id}>
            <MovieLink to={`/shop/${_id}`} state={{ from: location }}>
              {name}
            </MovieLink>
          </li>
        ))}
      </List>
    </div>
  );
};

TrendingList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
export default TrendingList;
