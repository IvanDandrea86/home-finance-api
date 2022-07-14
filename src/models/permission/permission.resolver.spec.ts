import { Test, TestingModule } from '@nestjs/testing';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';
import { PrismaModule } from '../../services/prisma/prisma.module';

describe('PermissionResolver', () => {
  let resolver: PermissionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionResolver, PermissionService],
      imports: [PrismaModule],
    }).compile();

    resolver = module.get<PermissionResolver>(PermissionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
