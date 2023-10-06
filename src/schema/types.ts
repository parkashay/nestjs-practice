// posts
export type Post = {
    id: string|number;
    title: string;
    slug: string;
    keywords: string[];
    content: string;
}

// users
export type User = {
    id: number|string;
    fullname: string;
    email: string;
    
}