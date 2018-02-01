import { SqlService, Query } from './../core/sql.service';
import { News } from './news';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable()
export class NewsService {

    constructor(private http: Http,
        private sql: SqlService) {

    }

    getNews() {
        return this.http.get('http://devapi.foodsconnected.com/public/news')
            .map(response => {
                var news: News[] = [];

                for (let n of response.json()) {
                    news.push(new News(n));
                }

                return news;
            });
    }

}