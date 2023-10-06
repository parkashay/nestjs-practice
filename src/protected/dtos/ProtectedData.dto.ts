import { IsNotEmpty } from "class-validator";

export class ProtectedDataDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    content: string;
}