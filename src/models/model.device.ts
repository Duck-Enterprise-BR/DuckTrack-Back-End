export class Device {
    public name: string;

    constructor(name: string, id: string) {
        this.name = name;
    }

    public getInfo(): string {
        return `Name: ${this.name}`;
    }
}