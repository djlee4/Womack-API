import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePartCategory {
  @Field()
  name: string;
}

@InputType()
export class CreatePartType {
  @Field()
  name: string;
}

@InputType()
export class CreatePartBrand {
  @Field()
  name: string;
}

@InputType()
export class CreatePartInput {
  @Field()
  name: string;

  @Field()
  barcode: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  description: string;

  @Field(() => CreatePartBrand)
  brand: CreatePartBrand;

  @Field(() => Boolean)
  hasCore: boolean;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => CreatePartCategory, { nullable: true })
  category?: CreatePartCategory;

  @Field(() => CreatePartType, { nullable: true })
  type?: CreatePartType;
}
