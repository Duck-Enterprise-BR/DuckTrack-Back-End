export class Device {
    public name: string;
    public notificationToken: string;

    constructor(name: string, notificationToken: string) {
        this.name = name;
        this.notificationToken = notificationToken;
    }
}
