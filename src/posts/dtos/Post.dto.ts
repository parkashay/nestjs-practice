import { IsNotEmpty } from 'class-validator'
export class PostDTO{
    @IsNotEmpty()
    title: string;

    keywords: string[];

    @IsNotEmpty()
    content: string;
}