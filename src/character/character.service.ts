import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { DataSource } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {
  private dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  
  create(createCharacterDto: CreateCharacterDto) {
    return this.dataSource.getRepository(Character).save(createCharacterDto);
  }

  findAll() {
    return this.dataSource.getRepository(Character).find();
  }
  
  findOne(id: number) {
    return this.dataSource.getRepository(Character).findOneBy({
      id
    });
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.dataSource.getRepository(Character).save(updateCharacterDto);
  }
  
  remove(id: number) {
    return this.dataSource.getRepository(Character).delete(id);
  }
  async earnexp(id: number, amount:number) {
    const character:Character = await this.findOne(id);
    if(!character) {
      throw new NotFoundException();
    }
    character.experience+= amount;
    this.dataSource.getRepository(Character).save(character);
  }
}
