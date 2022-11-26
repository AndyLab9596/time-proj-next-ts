import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { connectDatabase, getAllDocuments, insertDocument } from '../../../helpers/db-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const eventId = req.query.eventId;
    const client = await MongoClient.connect(`mongodb+srv://andy01:123qweasd@cluster0.kzqaurn.mongodb.net/events?retryWrites=true&w=majority`)

    if (req.method === 'POST') {
        // add server-side validation
        const { email, name, text } = req.body;

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid input' });
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId,
        }

        let client;
        let resultInsert;
        try {
            client = await connectDatabase();

        } catch (error) {
            res.status(500).json({ message: 'Connecting to database failed' });
            return;
        }

        try {
            resultInsert = await insertDocument(client as MongoClient, 'comments', newComment);
            (client as MongoClient).close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting to database failed' });
            return;
        }

        const resultComment = { ...newComment, _id: resultInsert.insertedId.toString() }
        res.status(201).json({ message: 'Added comment.', comment: resultComment })
    }

    if (req.method === 'GET') {
        const client = await connectDatabase();
        const documents = await getAllDocuments(client, 'comments', { _id: -1 }, { eventId: eventId as string })
        client.close()
        res.status(200).json({ comments: documents });
    }

    client.close();
}