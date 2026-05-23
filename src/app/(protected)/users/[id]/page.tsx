import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getUserById } from '@/queries/user.queries'
import { PenSquare, Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  params: Promise<{ id: string }>
}

export default async function UsersPage({ params }: Props) {
  const { id } = await params
  const user = await getUserById(id)

  if (!user) notFound()

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
          {user.firstName} {user.familyName}
        </h1>

        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/users/${user.id}/edit`}>
              <PenSquare />
              <span>Edit user</span>
            </Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/users">
              <Undo2 />
              <span>Back</span>
            </Link>
          </Button>
        </div>
      </div>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
