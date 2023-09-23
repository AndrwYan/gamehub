export default interface PersonalProject {        
    projectId: string;
    title: string;
    description: string;
    featured_image: string;
    demo_link: string | null;
    source_link: string | null;
    tags: string[];
}  