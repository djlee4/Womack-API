import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PartsService } from './parts.service';
import { Part } from './entities/part.entity';
import { CreatePartInput } from './dto/create-part.input';
import { UpdatePartInput } from './dto/update-part.input';

@Resolver(() => Part)
export class PartsResolver {
  constructor(private readonly partsService: PartsService) {}

  @Mutation(() => Part)
  createPart(@Args('createPartInput') createPartInput: CreatePartInput) {
    return this.partsService.create(createPartInput);
  }

  @Query(() => [Part], { name: 'parts' })
  findAll() {
    return this.partsService.findAll();
  }

  @Query(() => Part, { name: 'part' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.partsService.findOne(id);
  }

  @Mutation(() => Part)
  updatePart(@Args('updatePartInput') updatePartInput: UpdatePartInput) {
    return this.partsService.update(updatePartInput.id, updatePartInput);
  }

  @Mutation(() => Part)
  removePart(@Args('id', { type: () => Int }) id: number) {
    return this.partsService.remove(id);
  }
}
