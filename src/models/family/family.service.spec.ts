import { Test, TestingModule } from '@nestjs/testing';
import { FamilyService } from './family.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('FamilyService', () => {
  let service: FamilyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FamilyService>(FamilyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
