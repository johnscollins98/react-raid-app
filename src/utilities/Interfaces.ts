export interface IMember {
  profession: string;
  role: string;
  name: string;
}

export interface ISubgroup {
  label: string;
  members: Array<IMember>;
}

export interface INote {
  heading: string;
  points: Array<string>;
}

export interface IEncounter {
  label: string;
  imageName: string;
  composition: Array<ISubgroup>;
  notes: Array<INote>;
}