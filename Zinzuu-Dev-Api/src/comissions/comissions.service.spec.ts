import { Test, TestingModule } from '@nestjs/testing';
import { ComissionsService } from './comissions.service';

describe('ComissionsService', () => {
  let service: ComissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComissionsService],
    }).compile();

    service = module.get<ComissionsService>(ComissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
