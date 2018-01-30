import { NewsService } from './../news.service';
import { Component } from '@angular/core';
import { News } from '../news';

@Component({
    templateUrl: 'news-list.html'
})
export class NewsListComponent {

    news: News[];
    
    constructor(private newsService: NewsService) {

    }

    ngOnInit() {
        this.newsService.getNews()
            .subscribe(news => {
                this.news = news;
            });
    }
}