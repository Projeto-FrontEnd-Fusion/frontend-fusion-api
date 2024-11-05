import { PrismaHelper } from "@/infra/db/prisma/helpers"

export const makePrismaHelperAdapter = () => {
  return PrismaHelper.getPrisma()
}