import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class Part {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id:number;

    @Column()
    @Field()
    barcode:string;

    @Column()
    @Field(type => Int)
    quantity:number;

    @Column()
    @Field()
    description:string;

    @Column()
    @Field()
    brand:string;
   
    @Column()
    @Field(type => Boolean)
    hasCore:boolean;

    @Column({nullable: true})
    @Field({nullable: true})
    price?:number; 

    @Column({nullable: true})
    @Field({nullable: true})
    category?:string;

    @Column({nullable: true})
    @Field({nullable: true})
    type?:string;
}