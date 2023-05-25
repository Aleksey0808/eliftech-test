import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location);

  return (
    <div>
      <p>NotFound</p>
      <Link to={backLinkHref}>
        {' '}
        <button type="button">Go back to main page</button>
      </Link>
    </div>
  );
};

export default NotFound;
