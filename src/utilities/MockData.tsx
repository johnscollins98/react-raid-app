import { IEncounter, ISubgroup, IWing } from "./Interfaces"

export const mockSubgroupOne : ISubgroup = {
  label: "Subgroup 1",
  members: [
    { name: "Test1.1", profession: "chronomancer", role: "Quickness" },
    { name: "Test1.2", profession: "druid", role: "Heal" },
    { name: "Test1.3", profession: "berserker", role: "Power BS" },
    { name: "Test1.4", profession: "weaver", role: "power" },
    { name: "Test1.5", profession: "weaver", role: "power" },
  ]
}

export const mockSubgroupTwo : ISubgroup = {
  label: "Subgroup 2",
  members: [
    { name: "Test2.1", profession: "firebrand", role: "Heal" },
    { name: "Test2.2", profession: "renegade", role: "Power Alac" },
    { name: "Test2.3", profession: "holosmith", role: "power" },
    { name: "Test2.4", profession: "dragonhunter", role: "power" },
    { name: "Test2.5", profession: "chronomancer", role: "power" },
  ]
}

export const mockEncounter : IEncounter = {
  id: "vale_guardian",
  label: "Vale Guardian",
  imageName: "vale_guardian.png",
  composition: [
    mockSubgroupOne,
    mockSubgroupTwo
  ]
}

export const mockWing : IWing = {
  id: "w1",
  label: "Spirit Vale",
  encounters: [mockEncounter]
}
