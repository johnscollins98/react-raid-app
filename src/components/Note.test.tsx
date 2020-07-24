import React from 'react';
import { render } from '@testing-library/react';
import Note from './Note';

it ('renders without failing', () => {
  render(<Note heading="General" points={["point 1", "point 2"]} />)
});
