import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PartCategory {
  @Field()
  id: string;
  @Field()
  name: string;
}

@ObjectType()
export class PartType {
  @Field()
  id: string;
  @Field()
  name: string;
}

@ObjectType()
export class PartBrand {
  @Field()
  id: string;
  @Field()
  name: string;
}

@ObjectType()
export class Part {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  barcode: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  description: string;

  @Field(() => PartBrand)
  brand: PartBrand;

  @Field(() => Boolean)
  hasCore: boolean;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => PartCategory, { nullable: true })
  category?: PartCategory;

  @Field(() => PartType, { nullable: true })
  type?: PartType;
}
