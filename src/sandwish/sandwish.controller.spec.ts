import { Test, TestingModule } from '@nestjs/testing';
import { SandwishController } from './sandwish.controller';

describe('SandwishController', () => {
  let controller: SandwishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SandwishController],
    }).compile();

    controller = module.get<SandwishController>(SandwishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
