import { Metadata } from 'next'
import Link from 'next/link'
import { NewUserForm } from '@/components/users/new-user-form'
import { Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Boilerplate | New User',
}

export default function NewUserPage() {
  return (
    <>
      <div className="flex items-start justify-between min-h-15 lg:min-h-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/users">Users</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>New</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button asChild variant="ghost">
          <Link href="/users">
            <Undo2 />
            <span>Back</span>
          </Link>
        </Button>
      </div>

      <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
        Create new user
      </h1>

      <NewUserForm />
    </>
  )
}
