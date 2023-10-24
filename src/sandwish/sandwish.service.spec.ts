import { Test, TestingModule } from '@nestjs/testing';
import { SandwishService } from './sandwish.service';

describe('SandwishService', () => {
  let service: SandwishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SandwishService],
    }).compile();

    service = module.get<SandwishService>(SandwishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
