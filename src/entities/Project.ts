export default interface Project {        
    title: string;
    description: string;
    featured_image: string;
    demo_link: string | null;
    source_link: string | null;
    tags: string[];
    vote_total: number;
    vote_ratio: number;
}  