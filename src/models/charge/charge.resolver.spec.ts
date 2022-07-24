import { Test, TestingModule } from '@nestjs/testing';
import { ChargeResolver } from './charge.resolver';
import { ChargeService } from './charge.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('ChargeResolver', () => {
  let resolver: ChargeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeResolver, ChargeService],
      imports: [PrismaModule],
    }).compile();

    resolver = module.get<ChargeResolver>(ChargeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
