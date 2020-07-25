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
  id: string;
  label: string;
  imageName: string;
  composition: Array<ISubgroup>;
  notes: Array<INote>;
}

export interface IWing {
  id: string,
  label: string,
  encounters: Array<IEncounter>
}

export interface INavProps {
  wings: Array<IWing>
}

export interface IEncounterRouterProps {
  wings: Array<IWing>
}

export interface IHomeProps {
  errorMessage: string;
}