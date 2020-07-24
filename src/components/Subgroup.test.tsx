import React from 'react';
import Subgroup from './Subgroup';

it('renders without failing', () => {
  const members = [
    { name: "Test1", profession: "weaver", role: "Power" },
    { name: "Test1", profession: "weaver", role: "Power" },
    { name: "Test1", profession: "weaver", role: "Power" },
    { name: "Test1", profession: "weaver", role: "Power" },
    { name: "Test1", profession: "weaver", role: "Power" },
  ];
  < Subgroup label="Subgroup 1" members={members} />
});
