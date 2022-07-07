import { Resolver, Query } from '@nestjs/graphql';
import { PartsService } from './parts.service';
import { Part } from './parts.entity';

@Resolver(of => Part)
export class PartsResolver {
    constructor(private partsService: PartsService) {}

    @Query(returns => [Part])
    parts(): Promise<Part[]> {
        return this.partsService.findAll();
    }
}
