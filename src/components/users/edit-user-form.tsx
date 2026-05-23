'use client'

import { Controller, useForm } from 'react-hook-form'
import { FormType, resolver } from '@/schemas/user.schema'
import { updateUser } from '@/actions/user.actions'

import { CloudUpload, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'

type Props = {
  id: string
  defaultValues: FormType
}

export function EditUserForm({ id, defaultValues }: Props) {
  const form = useForm<FormType>({
    resolver,
    defaultValues
  })

  async function onSubmit(formData: FormType) {
    try {
      await updateUser(id, formData)
      toast.success("Saved!")
    } catch (error) {
      toast.error("Failed!")
    }
  }

  return (
    <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="firstName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1">
              <FieldLabel htmlFor="firstName">Name:</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="on"
                autoCorrect="on"
                autoFocus
                id="firstName"
                maxLength={24}
                minLength={2}
                placeholder="Name"
                required
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="familyName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1">
              <FieldLabel htmlFor="familyName">Family Name:</FieldLabel>
              <Input
                {...field}
                autoComplete="on"
                autoCorrect="on"
                id="familyName"
                maxLength={32}
                minLength={2}
                placeholder="Family Name"
                required
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1">
              <FieldLabel htmlFor="email">Email:</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="email"
                id="email"
                placeholder="email@example.com"
                required
                type="email"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <Field orientation="horizontal">
        <Button className="flex gap-1 items-center" type="button" variant="outline" onClick={() => form.reset()}>
          <RefreshCw />
          Reset
        </Button>

        <Button className="flex gap-1 items-center" type="submit">
          <CloudUpload />
          Submit
        </Button>
      </Field>
    </form>
  )
}
