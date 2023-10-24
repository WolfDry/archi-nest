import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { SandwishService } from './sandwish.service';

@Controller('sandwish')
export class SandwishController {

    constructor(private sandwishService: SandwishService) { }

    @Public()
    @Get()
    async getSandwish() {
        return this.sandwishService.getAll()
    }
}
