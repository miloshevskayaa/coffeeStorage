import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Coffee } from 'src/coffee/entities/coffee.entity';
import { Espresso } from './espresso.entity';
import { Milk } from './milk.entity';
import { Chocolate } from './chocolate.entity';
import { Whiskey } from './whiskey.entity';
import { Syrop } from './syrop.entity';
import { Topping } from './topping.entity';

@Entity()
export class Recipe{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Coffee)
    @JoinColumn()
    coffee: Coffee;

    @Column({ length: 20 })
    name: string;
    

    @ManyToOne(() => Espresso)
    @JoinColumn()
    espresso: Espresso[];

    @Column()
    countWater: number;

    @ManyToOne(() => Milk)
    @JoinColumn()
    milk: Milk[];

    @Column()
    countMilkFoam: number;

    @Column()
    countIceCream: number;

    @Column()
    countCream: number;

    @Column()
    countLemonJuice: number;

    @Column()
    countWrippedCream: number;

    @ManyToOne(() => Chocolate)
    @JoinColumn()
    chocolate: Chocolate[];

    @ManyToOne(() => Whiskey)
    @JoinColumn()
    whiskey: Whiskey[];

    @ManyToOne(() => Syrop)
    @JoinColumn()
    syrop: Syrop[];

    @ManyToOne(() => Topping)
    @JoinColumn()
    topping: Topping[];

}

