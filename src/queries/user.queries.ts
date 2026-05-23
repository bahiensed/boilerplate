import { prisma } from '@/lib/prisma'

export async function getUsers() {
  return prisma.user.findMany({
    orderBy: { firstName: 'asc' },
  })
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  })
}
