import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topping {
    @PrimaryGeneratedColumn()
    id_topping: number;
   
    @Column({ length: 15 })
    name: string;

    @Column()
    count: number;
    
}