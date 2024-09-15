import { getToken } from '@/lib/auth';

export async function GET() {
  let token;

  try {
    token = await getToken();
  } catch (error) {
    token = null;
  }

  return Response.json({ token });
}
