import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsResolver } from './parts.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PartsResolver, PartsService],
})
export class PartsModule {}
