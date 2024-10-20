import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function UpdateUserSessionByIdService(ip: string, data: any) {
  const prisma = await PrismaHelper.getPrisma();
  await prisma.session.update({
    where: { ip: ip },
    data: data,
  });
}
