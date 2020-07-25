import React from 'react';
import { render } from '@testing-library/react';

import { mockNotes } from '../../utilities/MockData';

import Note from './Note';

it('renders without failing', () => {
  render(<Note heading={mockNotes[0].heading} points={mockNotes[0].points} />)
});
