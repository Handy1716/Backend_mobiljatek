import { IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class CreateCharacterDto {


    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsOptional()
    experience: number = 0;
    

}
