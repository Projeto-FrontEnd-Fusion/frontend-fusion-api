import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { Either, left, right } from '@/shared/either';
import { UserModel } from '@/models';
import { UserNotFoundedError } from '@/errors/user';

export async function GetUserByIdService(
  userId: string
): Promise<Either<UserNotFoundedError, UserModel>> {
  const prisma = await PrismaHelper.getPrisma();
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (user) return right(user);

  return left(new UserNotFoundedError());
}
