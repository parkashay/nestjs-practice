// posts
export type Post = {
    id: string|number;
    title: string;
    content: string;
}

// users
export type User = {
    id: number|string;
    fullname: string;
    email: string;
}

export type ErrorMessage = {
    message: string;
}

export type LoginResponse = {
    user: User;
    accessToken: string;
}