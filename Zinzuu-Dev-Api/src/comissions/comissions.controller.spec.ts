import { Test, TestingModule } from '@nestjs/testing';
import { ComissionsController } from './comissions.controller';

describe('ComissionsController', () => {
  let controller: ComissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComissionsController],
    }).compile();

    controller = module.get<ComissionsController>(ComissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
