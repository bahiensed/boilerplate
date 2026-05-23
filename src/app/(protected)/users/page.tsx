import Link from 'next/link'
import { getUsers } from '@/queries/user.queries'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/users/data-table'

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
          Users
        </h1>

        <Button asChild>
          <Link href="/users/new">
            <Plus />
            <span>Create new user</span>
          </Link>
        </Button>
      </div>

      <DataTable data={users} />
    </>
  )
}
