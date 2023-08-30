import Project from "./Project";

export default interface Profile {
    name: string;
    user: string;
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

    top_skills: string[];
    other_skills: string[];
    projects: Project[];
}
  