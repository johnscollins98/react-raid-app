import React from 'react';
import { render } from '@testing-library/react';
import Encounter from './Encounter';

import { mockEncounter } from '../../utilities/MockData'

it('renders without failing', () => {
  render(<Encounter {...mockEncounter} />)
});
