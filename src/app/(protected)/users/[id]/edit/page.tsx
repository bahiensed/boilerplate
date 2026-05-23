import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formSchema } from '@/schemas/user.schema'
import { getUserById } from '@/queries/user.queries'
import { EditUserForm } from '@/components/users/edit-user-form'
import { Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditUser({ params }: Props) {
  const { id } = await params
  const user = await getUserById(id)

  if (!user) notFound()

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
          Edit user
        </h1>

        <Button asChild variant="ghost">
          <Link href={`/users/${id}`}>
            <Undo2 />
            <span>Back</span>
          </Link>
        </Button>
      </div>

      <EditUserForm
        id={id}
        defaultValues={formSchema.parse(user)}
      />
    </>
  )
}
