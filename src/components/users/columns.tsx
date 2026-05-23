'use client'

import { type ColumnDef } from '@tanstack/react-table'
import { type UserModel } from '@/generated/prisma/models/User'
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header'

export const columns: ColumnDef<UserModel>[] = [
  {
    id: 'name',
    accessorFn: (row) => `${row.firstName} ${row.familyName}`,
    filterFn: (row, _columnId, filterValue: string) => {
      const filter = filterValue.toLowerCase()
      const fullName = `${row.original.firstName} ${row.original.familyName}`.toLowerCase()
      const email = row.original.email.toLowerCase()
      return fullName.includes(filter) || email.includes(filter)
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
]
