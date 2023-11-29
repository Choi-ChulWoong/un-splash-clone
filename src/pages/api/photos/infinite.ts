import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { PhotoData } from '@/types/photo';

const MAX_VIEW = 10;
const MIN_VIEW = 1;

interface Response {
  ok: boolean;
  data?: PhotoData[];
  page?: number;
  totalPage?: number;
  view?: number;
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const filePath = path.join(process.cwd(), 'public/data', 'photoData.json');
  try {
    const jsonFile = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonFile);

    const { page = 1, view = 5 } = req.query;
    // 형변환
    const pageNum: number = Number(page);
    const viewNum: number = Number(view);
    // 전체 페이지
    const totalPage = Math.ceil(data.length / viewNum);

    if (
      pageNum <= 0 ||
      pageNum > totalPage ||
      viewNum > MAX_VIEW ||
      viewNum < MIN_VIEW
    ) {
      return res.status(400).json({ ok: false });
    }

    const startIdx = (pageNum - 1) * viewNum;
    const endIdx = startIdx + viewNum;
    const curPageData = data.slice(startIdx, endIdx);

    const result: Response = {
      ok: true,
      data: curPageData,
      totalPage,
      page: pageNum,
      view: viewNum,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).end('Server Error');
  }
}
