import React from 'react';

import '../index.css'

import Subgroup from './Subgroup';

export default { title: "Subgroup" };

const members = [
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
  { name: "Test1", profession: "weaver", role: "Power" },
];

export const withThree = () => (<Subgroup label="Subgroup 1" members={members.splice(0, 3)} />)

export const withFive = () => (<Subgroup label="Subgroup 1" members={members.splice(0, 5)} />)

export const withEight = () => (<Subgroup label="Subgroup 1" members={members} />)