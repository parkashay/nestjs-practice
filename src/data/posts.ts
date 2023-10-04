import { Post } from "src/schema/types";

const posts: Post[] = [
    {
        id: 1,
        title: "this is a title",
        keywords: ['first', 'one'],
        content: " This is a content for the post",
    },
    {
        id: 2,
        title: "This is post 2",
        keywords: ['second', '2'],
        content: "This is a content for the post 2",
    },
    {
        id: 3,
        title: "This is post 3",
        keywords: ['third', '3'],
        content: "This is a content for the post 3",
    }
];

export default posts;