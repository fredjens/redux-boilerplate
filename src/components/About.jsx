import React from 'react';
import { Link } from 'react-router';

const About = (props) => (
  <div>
    <h1>The about page</h1>
    <p>This is a paragraph</p>
    <Link to="/">Go back</Link>
  </div>
);

export default About;
