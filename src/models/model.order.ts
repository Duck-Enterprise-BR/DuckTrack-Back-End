export class Order {
    public name: string;
    public code: string;
    public device: string;

    constructor(name: string, code: string, device: string) {
        this.name = name;
        this.code = code;
        this.device = device
    }
}