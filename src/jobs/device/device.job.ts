import { Device } from '../../models/model.device';
import { MongoClient } from 'mongodb';

export class DeviceJob {
    public static async Register(device: Device): Promise<void> {
        let mongoURL:string = process.env.MONGO_URL || "";
        let dbName:string = process.env.DB_NAME || "";
        let dbDevice:string = process.env.DB_DEVICE || "";

        let client = new MongoClient(mongoURL);
        try {
            await client.connect();
            let db = client.db(dbName);
            let dispositivos = db.collection(dbDevice);
            await dispositivos.insertOne(device);
            console.log('Dispositivo cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar o dispositivo:', error);
        } finally {
            await client.close();
        }
    }
}