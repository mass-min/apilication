import { object, string, array, number, TypeOf } from 'yup'

export const applicationSchema = object({
  name: string().required().min(2).max(10),
  email: string().required().email(),
})

export type Application = TypeOf<typeof applicationSchema>
