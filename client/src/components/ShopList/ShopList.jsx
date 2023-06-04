import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieLink, List } from './Shop[List.styled';

const ShopList = ({ shop }) => {
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

ShopList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
export default ShopList;
