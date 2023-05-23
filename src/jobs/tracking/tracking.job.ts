import axios, { AxiosResponse } from "axios";

class TrackingJob {
    public static async Track(code: string): Promise<AxiosResponse> {
        const url = process.env.API_URL;
        const response: AxiosResponse = await axios.get(`${url}${code}`);
        return response;
    }
}

export { TrackingJob };
