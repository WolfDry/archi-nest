import { Module } from '@nestjs/common';
import { SandwishService } from './sandwish.service';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { SandwishController } from './sandwish.controller';

@Module({
  imports: [PrismaModule],
  providers: [SandwishService],
  controllers: [SandwishController]
})
export class SandwishModule { }
