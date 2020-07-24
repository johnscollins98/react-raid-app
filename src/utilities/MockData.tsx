
export const mockSubgroupOne = {
  label: "Subgroup 1",
  members: [
    { name: "Test1.1", profession: "chronomancer", role: "Quickness" },
    { name: "Test1.2", profession: "druid", role: "Heal" },
    { name: "Test1.3", profession: "berserker", role: "Power BS" },
    { name: "Test1.4", profession: "weaver", role: "power" },
    { name: "Test1.5", profession: "weaver", role: "power" },
  ]
}

export const mockSubgroupTwo = {
  label: "Subgroup 2",
  members: [
    { name: "Test2.1", profession: "firebrand", role: "Heal" },
    { name: "Test2.2", profession: "renegade", role: "Power Alac" },
    { name: "Test2.3", profession: "holosmith", role: "power" },
    { name: "Test2.4", profession: "dragonhunter", role: "power" },
    { name: "Test2.5", profession: "chronomancer", role: "power" },
  ]
}

export const mockNotes = [
  {heading: "Heading 1", points: ["Point 1.1", "Point 1.2"]},
  {heading: "Heading 2", points: ["Point 2.1", "Point 2.2"]},
]

export const mockEncounter = {
  label: "Vale Guardian",
  imageName: "vale_guardian.png",
  notes: mockNotes,
  composition: [
    mockSubgroupOne,
    mockSubgroupTwo
  ]
}
