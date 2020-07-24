import React from 'react';

import '../index.css'

import Note from './Note';

export default { title: "Note" };

export const withValid = () => <Note heading="General" points={["Point 1", "Point 2"]}/>