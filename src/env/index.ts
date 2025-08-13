import z from "zod";

const envSchema = z.object({
  BASE_URL: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Variáveis de ambiente inválidas", z.treeifyError(_env.error));
  throw new Error("Variáveis de ambiente inválidas");
}

export const env = _env.data;
