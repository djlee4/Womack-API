import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreatePartInput {
    @Field(type => Int)
    id:number;

    @Field()
    barcode:string;

    @Field(type => Int)
    quantity:number;

    @Field()
    description:string;

    @Field()
    brand:string;

    @Field(type => Boolean)
    hasCore:boolean;

    
    @Field({nullable: true})
    price?:number; 

    
    @Field({nullable: true})
    category?:string;

    
    @Field({nullable: true})
    type?:string;
}