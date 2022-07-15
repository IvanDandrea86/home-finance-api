import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
