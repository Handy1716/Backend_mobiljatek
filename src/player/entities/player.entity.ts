import { Character } from "src/character/entities/character.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email: string;

    @Column()
    banned:boolean;


    @OneToMany(() => Character, (character) => character.player, {
        onDelete: "CASCADE",
    })
    characters: Character[];

}
