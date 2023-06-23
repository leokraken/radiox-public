import z from 'zod';

const maxChars = 40;
const maxCharsTag = 8;
const minChars = 2;

const Schema = z.object({
  id: z.string()
    .min(minChars)
    .max(maxChars),
  name: z.string()
    .min(minChars)
    .max(maxChars),
  signal: z.string()
    .min(minChars)
    .max(maxChars),
  url: z.string().url(),
  tags: z.optional(
    z.array(z.string()
      .min(minChars)
      .max(maxCharsTag)
    )
  )
}).strict();


export default Schema;