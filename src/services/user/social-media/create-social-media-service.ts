import { makeUuidAdapter } from '@/factories/infra/id';
import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { SocialMediaModel } from '@/models';

export async function CreateSocialMediaService(
  data: Omit<SocialMediaModel, 'id'>,
  userId: string
): Promise<SocialMediaModel | void | null> {
  const prisma = await PrismaHelper.getPrisma();
  const socialMedia = await prisma.socialMedia.create({
    data: {
      id: makeUuidAdapter().build(),
      name: data.name,
      baseUri: data.baseUri,
    },
  });

  const userSocialMedia = await prisma.userSocialMedia.create({
    data: {
      userId: userId,
      socialMediaId: socialMedia.id,
    },
  });

  return socialMedia || null;
}
