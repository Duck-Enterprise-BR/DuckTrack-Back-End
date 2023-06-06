import orderModel from "../../useCases/order/order.model";
import axios from "axios";
import { RedisUseCase } from "../../useCases/redis/redis.usecase";

export class TrackJob {
    async track() {
        const orders = await orderModel.find({ enabled: true });
        for (let i = 0; i < orders.length; i++) {
            const response = await this.trackApi(orders[i].code ?? "");
            console.log(response);
        }
    }

    private async trackApi(code: string): Promise<any> {
        let data = undefined;
        await new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        try {
            const response = await axios.get(`${process.env.API_URL}${code}`);
            data = response.data;
        } catch (error) {
            console.log("TrackAPI ERROR: ", error);
        }

        return data;
    }
}