import {object, string, array, number, TypeOf} from 'yup'

export const personSchema = object({
  name: string().required().min(2).max(10),
  email: string().required().email(),
});

export type Person = TypeOf<typeof personSchema>