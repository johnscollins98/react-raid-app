import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css'

import Member from './Member';

export default { title: "Member" };

export const withValid = () => (<Member name="Elosia" profession="weaver" role="Power" />)