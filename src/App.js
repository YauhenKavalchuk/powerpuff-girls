import PropTypes from 'prop-types';

import { Header } from './layout/header';
import { Footer } from './layout/footer';

export const App = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};
