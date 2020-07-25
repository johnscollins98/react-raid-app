import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css'
import { mockWing } from '../utilities/MockData'

import Nav from './Nav';

export default { title: "Nav" };

export const withValid = () => (
  <Router>
    <Nav wings={[mockWing]} />
  </Router>
)