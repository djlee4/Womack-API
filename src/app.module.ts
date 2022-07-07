import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PartsModule } from './parts/parts.module';


@Module ({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true}),
    PartsModule,
    ],
  controllers: [],
  providers:[],
})

export class AppModule {}