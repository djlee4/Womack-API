import { Injectable } from '@nestjs/common';
import { Part } from './parts.entity';
;

@Injectable()
export class PartsService {
    async findAll(): Promise<Part[]> {
        const part = new Part();
        part.id = 1;
        part.barcode = 123456789012;

        return [part];
    }
}
