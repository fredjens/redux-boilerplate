import React from 'react';
import { Link } from 'react-router';

const PageNotFound = (props) => (
  <div>
    <p>Page not found</p>
    <Link to="/">Go home</Link>
  </div>
);

export default PageNotFound;
