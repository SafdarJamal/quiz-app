import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

import Header from '../Header';

const Layout = ({ children, toggleDarkMode, darkMode }) => {
  return (
    <Fragment>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  toggleDarkMode: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default Layout;

