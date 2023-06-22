import z from 'zod';

const maxChars = 40;
const minChars = 2;

const Schema = z.object({
  id: z.string()
    .min(minChars)
    .max(maxChars),
  title: z.string()
    .min(minChars)
    .max(maxChars),
  signal: z.string()
    .min(minChars)
    .max(maxChars),
  url: z.string().url(),
  tags: z.optional(
    z.array(z.string()
      .min(minChars)
      .max(maxChars)
    )
  )
}).strict();


export default Schema;