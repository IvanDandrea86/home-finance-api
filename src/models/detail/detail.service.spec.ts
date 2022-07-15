import { Test, TestingModule } from '@nestjs/testing';
import { DetailService } from './detail.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('DetailService', () => {
  let service: DetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<DetailService>(DetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
