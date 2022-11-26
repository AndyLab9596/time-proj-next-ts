import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '../../helpers/db-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }
        let client;

        try {
            client = await connectDatabase();

        } catch (error) {
            res.status(500).json({ message: 'Connecting to database failed' });
            return;
        }

        try {
            await insertDocument(client as MongoClient, 'newsletter', { email: userEmail });
            (client as MongoClient).close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting to database failed' });
            return;
        }

        res.status(201).json({ message: 'Signed up !' })
    }
}