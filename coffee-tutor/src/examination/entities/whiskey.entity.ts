import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Whiskey{
    @PrimaryGeneratedColumn()
    id_whiskey: number;

    @Column({ length: 20 })
    name: string;

    @Column()
    age: number;

    @Column()
    count: number;
    
}  