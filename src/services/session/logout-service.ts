import { PrismaHelper } from "@/infra/db/prisma/helpers/prisma-helper";

// 1. verify if user exists
// 2. exclude current session model data
// 3. return a status code ok

export async function LogoutService() {
  const prisma = await PrismaHelper.getPrisma();
}