import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { DataSource } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  private dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  create(createPlayerDto: CreatePlayerDto) {
    return this.dataSource.getRepository(Player).save(createPlayerDto);
  }

  findAll() {
    return this.dataSource.getRepository(Player).find();
  }

  findOne(id: number) {
    return this.dataSource.getRepository(Player).findOneBy({
      id
    });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.dataSource.getRepository(Player).save(updatePlayerDto);
  }

  remove(id: number) {
    return this.dataSource.getRepository(Player).delete(id);
  }
}
