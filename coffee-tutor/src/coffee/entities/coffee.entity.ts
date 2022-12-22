import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id_coffee: number;
   
    @Column({ length: 15 })
    name: string;

    @Column({ length: 255 })
    primary_picture: string;

    @Column({ length: 255 })
    secondary_picture: string;

    @Column({ length: 255 })
    youtube_link: string;
}
