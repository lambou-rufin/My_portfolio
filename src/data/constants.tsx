import BioRezerv from "../assets/Bio-Rezerv.jpg"
import LCB_Corporation from "../assets/LCBCorporation.jpg"
import Particulier from "../assets/softSkills.png"
import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/project.jpg";
import Projet_Java_Gestion_Cpt from "../assets/GestionCpt.png";
import SpeedType from "../assets/SpeedType.jpg";
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = 
{
  google: Google,
  verizon: Verizon,
  biorezerv: BioRezerv,
  lcb_corporation: LCB_Corporation,
  particulier: Particulier,
};


export enum Constants 
{
  USERNAME = " Rufin LAMBOANDRIANIRINA",
}



// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "project name 1": ProjectImg,
  "gestion de produit - projet java spring boot": ProjectImg,
  "projet java (gestion de compétences)": Projet_Java_Gestion_Cpt,
  "speedtype": SpeedType,
};
