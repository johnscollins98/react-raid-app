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
  imageLink: string;
  notes: string;
  subgroups: Array<ISubgroup>;
}

export enum GW2EmbedTypes {
  Skill = "skills",
  Trait = "traits",
}

export interface IGW2EmbedProps {
  id: string;
}

export interface ICustomGW2SkillProps {
  label: string;
  wikiLink: string;
  imageLink: string;
}

export interface IYouTubeModalProps {
  id: string;
  label: string;
}

export interface IImageModalProps {
  imageLink: string;
  label: string;
  alt: string;
}

export interface IMiscEmbedProps {
  id: string;
}

export interface IRoleEmbedProps {
  role: string;
  profession: string;
}

export interface IWing {
  id: string;
  wingLabel: string;
  wingName: string;
  encounters: Array<IEncounter>;
}

export interface INavProps {
  wings: Array<IWing>;
}

export interface IEncounterRouterProps {
  wings: Array<IWing>;
}

export interface IHomeProps {
  errorMessage: string;
}

export interface IRouterParams {
  wing: string;
  encounter: string;
}
