import { Test, TestingModule } from '@nestjs/testing';
import { RevenueService } from './revenue.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('RevenueService', () => {
  let service: RevenueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<RevenueService>(RevenueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
