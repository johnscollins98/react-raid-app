import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { mockWing } from '../utilities/MockData';

import Nav from './Nav';

it('renders without failing', () => {
  render(
    <Router>
      <Nav wings={[mockWing]} />
    </Router>
  )
});
