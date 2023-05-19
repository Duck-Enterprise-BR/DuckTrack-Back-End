import axios, { AxiosResponse } from "axios";

class TrackingJob{
    public static async Track(code: string): Promise<AxiosResponse> {
        let url = process.env.API_URL;
        let response: AxiosResponse = await axios.get(`${url}${code}`);
        return response;
    }
}

export { TrackingJob };