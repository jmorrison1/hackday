export class News {
    id: number;
    title: string;
    summary: string;
    image: string;
    date: Date;

    constructor(json: any) {
        this.title = json.title;
        this.id = json.id;
        this.summary = json.summary;
        this.image = json.image;
        this.date = json.date;
    }
}