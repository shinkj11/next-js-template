// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  age: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.method)
  switch (req.method) {
    case 'GET' : {
      console.log('req.query :', req.query);
      res.status(200).json({ data: { age: 38 }})
      break;
    }
    case 'POST' : {
      console.log('req.body :', req.body);
      res.status(200).json({ data: { age: 38 }})
      break;
    }
  } 
}
