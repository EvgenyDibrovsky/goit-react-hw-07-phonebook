import PropTypes from 'prop-types';
import css from './Header.module.css';

export const Header = ({ title, children }) => {
  return (
    <header className={css.header}>
      {title && <h1>{title}</h1>}
      {children}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
