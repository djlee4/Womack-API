import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PartsService } from './parts.service';
import { Part } from './parts.entity';
import { CreatePartInput } from './dto/create-part.input';

@Resolver(of => Part)
export class PartsResolver {
    constructor(private partsService: PartsService) {}

    @Query(returns => [Part])
    parts(): Promise<Part[]> {
        return this.partsService.findAll();
    }

    @Mutation(returns => Part)
    createPart(@Args('createPartInput')createPartInput: CreatePartInput): Promise<Part> {
        return this.partsService.createPart(createPartInput);
    }
}
