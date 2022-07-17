import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartInput } from './dto/create-part.input';
import { Part } from './parts.entity';
;

@Injectable()
export class PartsService {
    constructor(@InjectRepository(Part) private partsRepository: Repository<Part>) {}

    createPart(createPartInput: CreatePartInput): Promise<Part> {
        const newPart = this.partsRepository.create(createPartInput);

        return this.partsRepository.save(newPart);
    }
    
    async findAll(): Promise<Part[]> {
        return this.partsRepository.find();
    }
}
