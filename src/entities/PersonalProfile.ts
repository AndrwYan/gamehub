import PersonalProject from "./PersonalProject";
import Skill from "./Skill";

export default interface PersonalProfile {        

    name: string;
    user: string;
    email: string;
    username: string;
    short_intro: string;
    bio: string;
    location: string;
    profile_image: string;
    social_github: string;
    social_twitter: string;
    social_linkedin: string; 
    social_youtube: string; 
    social_website: string; 

    skills: Skill[];
    projects: PersonalProject[];
}
  