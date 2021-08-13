import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import {personSchema} from "../../schemas/person";
import {ObjectShape, OptionalObjectSchema} from "yup/lib/object";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({...req.body, method: req.method})
}

export function validate(schema: OptionalObjectSchema<ObjectShape>, handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (['POST', 'PUT'].includes(req.method)) {
      try {
        await schema.validate(req.body)
      } catch (error) {
        return res.status(400).json(error)
      }
    }
    await handler(req, res)
  }
}

export default validate(personSchema, handler)