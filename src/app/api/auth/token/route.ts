import { getToken } from '@/lib/auth';

export const GET = async () => {
  let token;

  try {
    token = await getToken();
  } catch (error) {
    token = null;
  }

  return Response.json({ token });
};

export default GET;
