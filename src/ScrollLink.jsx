import { useLocation, useNavigate } from 'react-router-dom';

const ScrollLink = ({ toId, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: toId } });
    } else {
      const el = document.getElementById(toId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${toId}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
