import { PrismaClient } from '@prisma/client';
import middleware from './encryptMiddleware';
import { seedDataAccount, seedDataExpense } from './seed/data';
import { dropDB } from './utils';
const prisma = new PrismaClient();
async function seed() {
  prisma.$use(middleware);
  try {
    await dropDB(prisma); //Connect DB
    prisma.$connect();
    await prisma.family.create({
      data: {
        id: '1234-5678-9876',
      },
    });
    await prisma.user.create({
      data: {
        email: 'ivan@admin.it',
        firstName: 'Ivan',
        lastName: "D'Andrea",
        validationToken: '',
        password: 'Qwerty1Q',
        Permission: {
          create: {
            type: 'USER',
          },
        },
      },
    });
    await prisma.user.create({
      data: {
        id: '1',
        email: 'sophie@user.it',
        firstName: 'Sohpie',
        lastName: 'Goldman',
        validationToken: '',
        password: 'Qwerty1Q',
        Family: { connect: { id: '1234-5678-9876' } },
        Permission: {
          create: {
            type: 'USER',
          },
        },
      },
    });
    await prisma.user.create({
      data: {
        id: '2',
        email: 'ivan@user.it',
        firstName: 'test',
        lastName: 'user',
        validationToken: '',
        password: 'Qwerty1Q',
        Family: { connect: { id: '1234-5678-9876' } },
        Permission: {
          create: {
            type: 'USER',
          },
        },
      },
    });
    seedDataExpense.forEach(async (element) => {
      const initialValue = 0;
      const sumWithInitial = element.data.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.cost / currentValue.period,
        initialValue,
      );
      await prisma.expense.create({
        data: {
          name: element.name,
          monthlyCost: sumWithInitial,

          expenseDetails: {
            createMany: {
              data: element.data,
            },
          },
        },
      });
    });

    seedDataAccount.forEach(async (element) => {
      const initialValue = 0;

      await prisma.account.create({
        data: {
          name: element.name,
          type: element.type,
          sold: element.sold,
        },
      });
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
