import Link from 'next/link'
import { NewUserForm } from '@/components/users/new-user-form'
import { Undo2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function UsersPage() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
          Create new user
        </h1>

        <Button asChild variant="ghost">
          <Link href="/users">
            <Undo2 />
            <span>Back</span>
          </Link>
        </Button>
      </div>

      <NewUserForm />
    </>
  )
}
