import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Milk {
    @PrimaryGeneratedColumn()
    id_milk: number;
   
    @Column({ length: 15 })
    name: string;

    @Column()
    count: number;

}