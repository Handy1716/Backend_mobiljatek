import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePlayerDto {


    @IsNotEmpty()
    email: string;

    @IsOptional()
    banned: boolean = false;

}
