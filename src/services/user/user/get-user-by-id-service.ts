import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { type Either, left, right } from '@/shared/either';
import { UserNotFoundedError } from '@/errors/user';
import { type UserModel } from '@/models';

export async function GetUserByIdService(
  userId: string
): Promise<Either<UserNotFoundedError, UserModel>> {
  const prisma = await PrismaHelper.getPrisma();
  try {
    const userOrNull = await prisma.user.findUnique({ where: { id: userId } });

    if (userOrNull) {
      return right(userOrNull);
    }

    return left(new UserNotFoundedError());
  } catch (error) {
    return left(new UserNotFoundedError());
  }
}
