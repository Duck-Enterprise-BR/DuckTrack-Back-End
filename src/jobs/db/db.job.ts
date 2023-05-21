import { MongoClient, InsertOneResult, Document, Collection } from 'mongodb';

export class DBJob {
    public static async insert(data: any, collection: string): Promise<InsertOneResult<any>> {
        let mongoURL: string = process.env.MONGO_URL || '';
        let dbName: string = process.env.DB_NAME || '';
        const client = new MongoClient(mongoURL);

        try {
            await client.connect();
            const db = client.db(dbName);
            const devices = db.collection(collection);
            const result = await devices.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        } finally {
            await client.close();
        }
    }

    public static async get(collectionName: string): Promise<any> {
        let mongoURL: string = process.env.MONGO_URL || '';
        let dbName: string = process.env.DB_NAME || '';
        const client = new MongoClient(mongoURL);

        await client.connect();
        let db = client.db(dbName);
        let result = db.collection(collectionName);
        let data = await result.find().toArray();
        return data;
    }
}