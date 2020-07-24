export interface Member {
  profession: string;
  role: string;
  name: string;
}

export interface Subgroup {
  label: string;
  members: Array<Member>;
}