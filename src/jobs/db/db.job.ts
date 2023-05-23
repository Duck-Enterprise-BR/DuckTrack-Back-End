import { MongoClient, InsertOneResult } from "mongodb";

export class DBJob {
    public static async insert(
        data: any,
        collection: string,
    ): Promise<InsertOneResult<any>> {
        const mongoURL: string = process.env.MONGO_URL || "";
        const dbName: string = process.env.DB_NAME || "";
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

    public static async get(collectionName: string, query: any): Promise<any> {
        const mongoURL: string = process.env.MONGO_URL || "";
        const dbName: string = process.env.DB_NAME || "";
        const client = new MongoClient(mongoURL);

        try {
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const data = await collection.find(query).toArray();
            return data;
        } catch (error) {
            throw error;
        } finally {
            await client.close();
        }
    }
}
