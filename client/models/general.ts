interface WorkExp {
  time?: string;
  title?: string;
  subtitle?: string;
  subtitle_link?: string;
}

interface Cv {
  about: {
    title: string,
    content: string[]
  };
  work_exp: CvBlock;
  education: CvBlock;
}

interface CvBlock {
  title: string;
  content: WorkExp[]
}

interface IAboutData {
  cv: Cv;
}

interface IAboutDataRoot {
  _id: string;
  name: string;
  data: IAboutData;
}

export interface About {
  name: string;
  other_name: string;
  profile_picture: string;
  deco_width: number;
}

interface Contact {
  linkedin: ContactDetail;
  github: ContactDetail;
  phone: ContactDetail;
  twitter: ContactDetail;
  email: ContactDetail;
}

interface ContactDetail {
  link: string;
  username: string;
}

export interface Content2 {
  title: string;
  content_html: string[];
}

export interface WorkExpContent {
  company: string;
  company_logo: string;
  company_link: string;
  time: string;
  location: string;
  content: Content2[];
}

interface Skills {
  title: string;
  content_html: string[];
}

interface Content3 {
  title: string;
  subtitle: string;
}

interface Education {
  title: string;
  content: Content3[];
}

interface Languages {
  title: string;
  content: string[];
}

interface WorkExpResume {
  title: string;
  content: WorkExpContent[];
}

interface IResume {
  about: About;
  contact: Contact;
  work_exp: WorkExpResume;
  skills: Skills;
  education: Education;
  languages: Languages;
  interests: Languages;
}

interface IResumeRoot {
  _id: string;
  name: string;
  data: IResume;
}


export type {
  IAboutData,
  IAboutDataRoot,
  IResume,
  IResumeRoot
}
