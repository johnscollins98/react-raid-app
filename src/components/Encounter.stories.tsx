import React from 'react';

import '../index.css'
import { mockEncounter } from '../utilities/MockData'

import Encounter from './Encounter';

export default { title: "Encounter" };

export const withValid = () => <Encounter {...mockEncounter}/>