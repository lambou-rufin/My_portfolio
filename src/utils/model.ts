export interface ISectionImages {
  [key: string]: string | undefined;
}
export interface ISectionsInfo {
  [key: string]: any | undefined;
}

export interface certficate {
  name?: string;
  org?: string;
  issued?: string;
  expiry?: string;
  credentialId?: string;
  credentialUrl?: string;
  url?: string;
}
export interface Prop {
  certficate: certficate;
}

export interface Education {
  name?: string;
  course?: string;
  location?: string;
  span?: string;
  specialization?: string;
  score?: string;
}
export interface PropEd {
  education: Education;
  ind: number;
}

export interface IExperience {
  span?: string;
  company?: string;
  location?: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  progress?: any;
}
export interface PropEXP {
  experience: IExperience;
}

export interface project {
  name?: string;
  description?: string;
  sourceCode?: string;
  demoLink?: string;
}
export interface PropPROJ {
  project: project;
}

export interface PropSKI {
  skills: string[];
  type: string;
}

export interface Map {
  [key: string]: string | undefined;
}

export interface Size {
  height: number | undefined;
  width: number | undefined;
}
