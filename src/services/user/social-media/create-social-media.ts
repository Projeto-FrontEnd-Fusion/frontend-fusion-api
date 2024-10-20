import { makeUuidAdapter } from '@/factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { SocialMediaModel } from '@/models/social-media-model';

export async function CreateSocialMediaService(
  data: Omit<SocialMediaModel, 'id'>
): Promise<SocialMediaModel | void | null> {
  const prisma = await PrismaHelper.getPrisma();
  const socialMedia = await prisma.socialMedia.create({
    data: {
      id: makeUuidAdapter().build(),
      name: data.name,
      baseUri: data.baseUri,
    },
  });

  return socialMedia || null;
}
