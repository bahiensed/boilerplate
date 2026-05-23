'use server'

import { prisma } from '@/lib/prisma'
import { FormType } from '@/schemas/user.schema'

export async function createUser(formData: FormType) {
    try {
      return await prisma.user.create({
        data: formData
      })
    } catch (error) {
        throw error instanceof Error ? error : new Error(String(error))
    }
}

export async function updateUser(id: string, formData: FormType) {
    try {
      return await prisma.user.update({
        where: { id },
        data: formData
      })
    } catch (error) {
        throw error instanceof Error ? error : new Error(String(error))
    }
}
