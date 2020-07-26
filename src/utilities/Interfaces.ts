export interface IMember {
  profession: string;
  role: string;
  name: string;
}

export interface ISubgroup {
  label: string;
  members: Array<IMember>;
}

export interface IEncounter {
  id: string;
  label: string;
  imageName: string;
  composition: Array<ISubgroup>;
}

export interface ISkillProps {
  id: string;
}

export interface IRoleEmbedProps {
  role: string;
  profession: string;
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

export interface IRouterParams {
  wing: string;
  encounter: string;
}