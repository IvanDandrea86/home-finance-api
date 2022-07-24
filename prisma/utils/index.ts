import { PrismaClient } from '@prisma/client';

export const dropDB = async (prisma: PrismaClient) => {
  try {
    await prisma.permission.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.expense.deleteMany({});
    await prisma.detail.deleteMany({});
    await prisma.family.deleteMany({});
    await prisma.account.deleteMany({});
  } catch (err) {
    return {
      error: { err },
    };
  }
};
