import { provide } from "inversify-binding-decorators";
import { createClient } from 'redis';

@provide(RedisUseCase)
class RedisUseCase {
    private redisClient: Redis.RedisCli;

    constructor(redisClient: Redis.RedisClient) {
        this.redisClient = redisClient;
    }

    public async setValue(key: string, value: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.redisClient.set(key, value, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    public async getValue(key: string): Promise<string | null> {
        return new Promise((resolve, reject) => {
            this.redisClient.get(key, (error, value) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(value);
                }
            });
        });
    }
}

export { RedisUseCase };
