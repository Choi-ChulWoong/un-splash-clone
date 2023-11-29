import { NextApiRequest, NextApiResponse } from 'next';
import { PhotoData } from '@/types/photo';
import fs from 'fs';
import path from 'path';

interface Response {
  ok: boolean;
  data?: PhotoData[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const filePath = path.join(process.cwd(), 'public/data', 'photoData.json');
  try {
    const jsonFile = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonFile);

    const result: Response = {
      ok: true,
      data: data,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).end('Server Error');
  }
}
