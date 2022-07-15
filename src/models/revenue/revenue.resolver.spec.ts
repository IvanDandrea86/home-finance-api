import { Test, TestingModule } from '@nestjs/testing';
import { RevenueResolver } from './revenue.resolver';
import { RevenueService } from './revenue.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('RevenueResolver', () => {
  let resolver: RevenueResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueResolver, RevenueService],
      imports: [PrismaModule],
    }).compile();

    resolver = module.get<RevenueResolver>(RevenueResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
