import { MongoClient, Sort } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect(`mongodb+srv://andy01:123qweasd@cluster0.kzqaurn.mongodb.net/events?retryWrites=true&w=majority`);
    return client;
}

export async function insertDocument(client: MongoClient, collection: string ,document: { [x: string]: any }) {
    const db = client.db();
    const response = await db.collection(collection).insertOne(document);
    return response;
}

export async function getAllDocuments(client: MongoClient, 
    collection: string, 
    sort: {[x: string]: string | number},
    filter: {[x: string]: string}
    ) {
    const db = client.db();
    const documents = await db.collection(collection).find(filter).sort(sort as Sort).toArray();
    return documents;
}