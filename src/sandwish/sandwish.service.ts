import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class SandwishService {
    constructor(private prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.sandwish.findMany()
    }
}
