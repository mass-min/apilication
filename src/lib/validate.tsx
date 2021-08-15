import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object'
import { NextApiRequest } from 'next'

const validate = async (
  schema: OptionalObjectSchema<ObjectShape>,
  req: NextApiRequest
) => {
  try {
    return schema.validate(req.body)
  } catch (error) {
    return error
  }
}

export default validate
