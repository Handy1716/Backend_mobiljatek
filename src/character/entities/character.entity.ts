import { Player } from "src/player/entities/player.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character {

    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    experience: number;
    
    @OneToOne(() => Player)
    @JoinColumn()
    player: Player;



}
