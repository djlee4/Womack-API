import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsResolver } from './parts.resolver';

@Module({
  providers: [PartsService, PartsResolver]
})
export class PartsModule {}
