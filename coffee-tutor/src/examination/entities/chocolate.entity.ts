import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chocolate {
    @PrimaryGeneratedColumn()
    id_chocolate: number;
   
    @Column({ length: 15 })
    name: string;

    @Column()
    count: number;

}