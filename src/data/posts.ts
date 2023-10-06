import { Post } from "src/schema/types";

const posts: Post[] = [
    {
        id: 1,
        title: "this is a title",
        slug:"post-1",
        keywords: ['first', 'one'],
        content: " This is a content for the post",
    },
    {
        id: 2,
        title: "This is post 2",
        slug:"post-2",
        keywords: ['second', '2', 'lol'],
        content: "This is a content for the post 2",
    },
    {
        id: 3,
        title: "This is post 3",
        slug: "post-3",
        keywords: ['third', '3'],
        content: "This is a content for the post 3",
    },
    {
        id: 4,
        title: "This is post 4",
        slug: "post-4",
        keywords: ['fourth', '4', 'lol', 'this'],
        content:"Hello there, I am sober now."
    }
];

export default posts;