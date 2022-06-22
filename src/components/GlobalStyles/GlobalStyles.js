import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  // Trong trường hợp muốn chỉ nhận 1 children
  // return React.Children.only(children)
  return children;
}

GlobalStyles.prototypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
