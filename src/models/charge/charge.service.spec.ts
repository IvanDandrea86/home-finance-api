import { Test, TestingModule } from '@nestjs/testing';
import { ChargeService } from './charge.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('ChargeService', () => {
  let service: ChargeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ChargeService>(ChargeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
