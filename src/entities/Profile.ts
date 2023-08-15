import Project from "./Project";

export default interface Profile {
    name: string;
    user: string;
    username: string;
    short_intro: string;
    bio: string;
    location: string;
    profile_image: string;
    top_skills: string[];
    other_skills: string[];
    projects: Project[];
}
  