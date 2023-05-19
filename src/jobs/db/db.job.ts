import { MongoClient, InsertOneResult } from 'mongodb';

export class DBJob {


    public static async Insert(data: any): Promise<InsertOneResult<any>> {
        let mongoURL: string = process.env.MONGO_URL || '';
        let dbName: string = process.env.DB_NAME || '';
        let dbDevice: string = process.env.DB_DEVICE || '';

        const client = new MongoClient(mongoURL);
        
        try {
            await client.connect();
            const db = client.db(dbName);
            const dispositivos = db.collection(dbDevice);
            const result = await dispositivos.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        } finally {
            await client.close();
        }
    }
}