import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Syrop {
    @PrimaryGeneratedColumn()
    id_syrop: number;
   
    @Column({ length: 15 })
    name: string;

    @Column()
    count: number;
    
}