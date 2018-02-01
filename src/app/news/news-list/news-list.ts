import { LoadingController } from 'ionic-angular';
import { NewsService } from './../news.service';
import { Component } from '@angular/core';
import { News } from '../news';

@Component({
    templateUrl: 'news-list.html'
})
export class NewsListComponent {

    news: News[];

    constructor(private newsService: NewsService,
        private loading: LoadingController) {

    }

    ngOnInit() {
        let loading = this.loading.create({
            content: 'Loading...'
        });

        loading.present();

        this.newsService.getNews()
            .finally(() => loading.dismiss())
            .subscribe(news => {
                this.news = news;
            });
    }
}