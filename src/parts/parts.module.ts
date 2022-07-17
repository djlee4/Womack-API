import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsResolver } from './parts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Part } from './parts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Part])],
  providers: [PartsService, PartsResolver]
})
export class PartsModule {}
