import z from 'zod';

const Schema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    signal: z.string(),
    url: z.string().url(),
  })
)

export default Schema;