import { Metadata } from 'next'
import Link from 'next/link'
import { getUsers } from '@/queries/user.queries'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/users/data-table'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Boilerplate | Users',
}

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <>
      <div className="flex items-start justify-between min-h-15 lg:min-h-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button asChild>
          <Link href="/users/new">
            <Plus />
            <span>Create new user</span>
          </Link>
        </Button>
      </div>

      <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
        Users
      </h1>

      <DataTable data={users} />
    </>
  )
}
