import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreatePartInput } from './dto/create-part.input';
import { UpdatePartInput } from './dto/update-part.input';
import { Part } from './entities/part.entity';

export const databaseURL = 'http://localhost:5100/parts';

@Injectable()
export class PartsService {
  constructor(private readonly httpService: HttpService) {}

  async create(createPartInput: CreatePartInput): Promise<Part> {
    return await this.httpService.axiosRef.post('/parts', createPartInput, {
      baseURL: databaseURL,
    });
  }

  async findAll(): Promise<Part[]> {
    return await this.httpService.axiosRef.get(`${databaseURL}/parts`);
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
