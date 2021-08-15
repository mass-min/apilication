import { NextApiRequest, NextApiResponse } from 'next'
import { personSchema } from '../../schemas/person'
import validate from '../../lib/validate'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await validate(personSchema, req)
    res.status(200).json({ ...req.body, method: req.method })
  } catch (error) {
    res.status(400).json(error)
  }
}

export default handler
