import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Part {
    @Field(type => Int)
    id:number;
    barcode:number;
    quantity:number;

    @Field()
    description:string;
    brand:string;
   

    @Field(type => Boolean)
    hasCore:boolean;

    @Field({nullable: true})
    price?:number; 
    category?:string;
    type?:string;
}