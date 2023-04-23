import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterDto } from './create-character.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) {
    

    @IsNotEmpty()
    id: number;
}
