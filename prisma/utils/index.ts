import { PrismaClient } from '@prisma/client';

export const dropDB = async (prisma: PrismaClient) => {
  try {
    await prisma.permission.deleteMany({});
    await prisma.user.deleteMany({});
  } catch (err) {
    return {
      error: { err },
    };
  }
};
