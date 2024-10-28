import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function DeleteUserSocialMediaByIdService(
  userId: string,
  socialMediaId: string
): Promise<void> {
  const prisma = await PrismaHelper.getPrisma();
  await prisma.userSocialMedia.delete({
    where: {
      userId_socialMediaId: {
        userId: userId,
        socialMediaId: socialMediaId,
      },
    },
  });

  await prisma.socialMedia.delete({
    where: {
      id: socialMediaId,
    },
  });
}
