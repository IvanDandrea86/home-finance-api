import { Test, TestingModule } from '@nestjs/testing';
import { FamilyResolver } from './family.resolver';
import { FamilyService } from './family.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('FamilyResolver', () => {
  let resolver: FamilyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyResolver, FamilyService],
      imports: [PrismaModule],
    }).compile();

    resolver = module.get<FamilyResolver>(FamilyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
