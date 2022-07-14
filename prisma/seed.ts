import { PrismaClient } from '@prisma/client';
import middleware from './encryptMiddleware';
import { dropDB } from './utils';
const prisma = new PrismaClient();
async function seed() {
  prisma.$use(middleware);
  try {
    await dropDB(prisma); //Connect DB
    prisma.$connect();
    await prisma.user.create({
      data: {
        email: 'ivan@admin.it',
        firstName: 'ivan',
        lastName: 'dand',
        validationToken: '',
        password: 'Qwerty1Q',
      },
    });
  } catch (err: any) {
    console.log(err);
  }
}

seed()
  .catch((err) => console.log(err))
  .finally(async () => {
    await prisma.$disconnect();
  });