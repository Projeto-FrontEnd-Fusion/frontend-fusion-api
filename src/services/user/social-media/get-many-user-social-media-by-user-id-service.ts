import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function GetManyUserSocialMediaByUserIdService(
  userId: string
): Promise<any[] | []> {
  const prisma = await PrismaHelper.getPrisma();
  const userSocialMedias = await prisma.userSocialMedia.findMany({
    where: {
      userId: userId,
    },
    include: {
      socialMedia: true,
    },
  });

  return userSocialMedias;
}
