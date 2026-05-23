import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formSchema } from '@/schemas/user.schema'
import { getUserById } from '@/queries/user.queries'
import { EditUserForm } from '@/components/users/edit-user-form'
import { Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Boilerplate | Edit User',
}

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditUserPage({ params }: Props) {
  const { id } = await params
  const user = await getUserById(id)

  if (!user) notFound()

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
              <BreadcrumbLink asChild>
                <Link href={`/users/${id}`}>{user.firstName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button asChild variant="ghost">
          <Link href={`/users/${id}`}>
            <Undo2 />
            <span>Back</span>
          </Link>
        </Button>
      </div>

      <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
        Edit user
      </h1>

      <EditUserForm
        id={id}
        defaultValues={formSchema.parse(user)}
      />
    </>
  )
}
