import React from 'react';
import { render } from '@testing-library/react';
import Member from './Member';

it ('renders without failing', () => {
  <Member name="TestName" role="TestRole" profession="TestProfession" />
});
