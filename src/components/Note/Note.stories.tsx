import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css'
import { mockNotes } from '../utilities/MockData'

import Note from './Note';

export default { title: "Note" };

export const withValid = () => <Note heading={mockNotes[0].heading} points={mockNotes[0].points} />