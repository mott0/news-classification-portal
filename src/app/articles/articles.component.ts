import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NewsArticlesService } from 'app/http-services/articles/news-articles.service';
import { NewsArticleResponse } from 'app/http-services/articles/responses/news-article.response';
import { NewsCategory } from 'app/http-services/classification/news-category.enum';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    private _newsArticles: NewsArticleResponse[] = [];

    public totalArticlesCounter: number;
    public displayedNewsArticles: NewsArticleResponse[] = [];
    public newsCategoryControl: FormControl;

    public newsCategories: { value: NewsCategory | 'ALL', name: String }[] = [
        { value: 'ALL', name: 'Все' },
        { value: NewsCategory.CULTURE, name: 'Культура' },
        { value: NewsCategory.ECONOMICS, name: 'Экономика' },
        { value: NewsCategory.INCIDENTS, name: 'Происшествия' },
        { value: NewsCategory.POLITICS, name: 'Политика' },
        { value: NewsCategory.SCIENCE, name: 'Наука' },
        { value: NewsCategory.SOCIETY, name: 'Общество' },
        { value: NewsCategory.TECHNOLOGIES, name: 'Технологии' },
        { value: NewsCategory.TRANSPORT, name: 'Транспорт' }
    ];

    constructor(
        private newsArticlesService: NewsArticlesService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.newsCategoryControl = new FormControl();
    }

    public ngOnInit(): void {
        this.loadData();
        this.refreshDisplayedNewsArticles();

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                newsCategory: 'ALL'
            }
        });

        this.route.queryParams.subscribe((params: Params) => {
            const newsCategory: NewsCategory = params['newsCategory'];
            this.newsCategoryControl.setValue(newsCategory);
            this.refreshDisplayedNewsArticles();
        });

        this.newsCategoryControl.valueChanges
            .subscribe(value => {
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: {
                        newsCategory: value
                    }
                });
        });
    }

    private loadData(): void {
        this.newsArticlesService.getNewsArticles()
            .subscribe(response => {
                this._newsArticles = response.newsArticles;
                this.totalArticlesCounter = this._newsArticles.length;
                this.refreshDisplayedNewsArticles();
            });
    }

    private refreshDisplayedNewsArticles(): void {
        if (this._newsArticles == null || this._newsArticles.length === 0) {
            return;
        }

        this.displayedNewsArticles = this._newsArticles.filter(newsArticle =>
            this.isNewsArticleSatisfiesNewsCategory(newsArticle, this.newsCategoryControl.value)
        );
    }

    private isNewsArticleSatisfiesNewsCategory(newsArticle: NewsArticleResponse, value: NewsCategory | null | 'ALL'): boolean {
        if (value != null
            && value !== 'ALL'
            && value !== newsArticle.newsCategory
        ) {
            return false;
        }
        return true;
    }
}
