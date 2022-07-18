import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { createDeflate } from 'zlib';
import { CreatePartInput } from './dto/create-part.input';
import { UpdatePartInput } from './dto/update-part.input';
import { Part } from './entities/part.entity';

export const databaseURL = 'http://localhost:5100';

@Injectable()
export class PartsService {
  constructor(private readonly httpService: HttpService) {}

  async create(createPartInput: CreatePartInput): Promise<Part> {
    const { data } = await this.httpService.axiosRef.post(
      '/parts',
      createPartInput,
      {
        baseURL: databaseURL,
      },
    );

    console.log(data);
    return data;
  }

  async findAll(): Promise<Part[]> {
    const { data } = await this.httpService.axiosRef.get(
      `${databaseURL}/parts`,
    );

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} part`;
  }

  update(id: number, updatePartInput: UpdatePartInput) {
    return `This action updates a #${id} part`;
  }

  remove(id: number) {
    return `This action removes a #${id} part`;
  }
}
