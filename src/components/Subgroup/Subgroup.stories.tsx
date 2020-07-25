import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css'

import Subgroup from './Subgroup';

export default { title: "Subgroup" };

const members = [
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test2", profession: "weaver", role: "Power" },
  { name: "Test3", profession: "weaver", role: "Power" },
  { name: "Test4", profession: "weaver", role: "Power" },
  { name: "Test5", profession: "weaver", role: "Power" },
  { name: "Test6", profession: "weaver", role: "Power" },
  { name: "Test7", profession: "weaver", role: "Power" },
  { name: "Test8", profession: "weaver", role: "Power" },
];

export const withThree = () => (<Subgroup label="Subgroup 1" members={members.slice(0, 3)} />)

export const withFive = () => (<Subgroup label="Subgroup 1" members={members.slice(0, 5)} />)

export const withEight = () => (<Subgroup label="Subgroup 1" members={members} />)