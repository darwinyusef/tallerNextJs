import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    return res.status(200).json({ message: `Hola, mundo! Id: ${id}` });
};

export default handler;