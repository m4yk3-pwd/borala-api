import {PrismaPg} from '@prisma/adapter-pg';
import {PrismaClient} from '../../generated/prisma';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL não está definida nas variáveis de ambiente');
}

const adapter = new PrismaPg({connectionString});

export const prisma = new PrismaClient({adapter});
