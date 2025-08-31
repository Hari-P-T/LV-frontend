import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tokenResponse = await axios.post(
      `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        grant_type: 'client_credentials',
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    res.status(200).json({ accessToken: tokenResponse.data.access_token });
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to get token' });
  }
}
