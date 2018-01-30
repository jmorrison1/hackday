import { News } from './news';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsService {

    constructor(private http: Http) {

    }

    getNews() {
        return this.http.get('https://api.foodsconnected.com/public/news')
            .map(response => {
                var news: News[] = [];

                for (let n of response.json()) {
                    news.push(new News(n));
                }

                return news;
            });
    }
}