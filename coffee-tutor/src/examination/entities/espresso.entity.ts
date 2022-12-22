import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Espresso{
    @PrimaryGeneratedColumn()
    id_espresso: number;

    @Column()
    id_variaty: number;

    @Column({ length: 20 })
    type: string;

    @Column()
    count: number;
}  