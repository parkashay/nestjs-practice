import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty({message: 'Fullname is required.'})
    fullname: string;

    @IsEmail()
    email: string;

    @MinLength(8)
    password: string;
}