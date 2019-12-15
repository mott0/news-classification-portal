import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { ClassificationRequest } from 'app/http-services/classification/requests/classification.request';
import { ClassificationResponse } from 'app/http-services/classification/responses/classification.response';
import { NewsArticlesResponse } from 'app/http-services/articles/responses/news-articles.response';

@Injectable({
    providedIn: 'root'
})
export class NewsArticlesService {
    private readonly webApiEndpoint: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.webApiEndpoint = environment.webApiEndpoint;
    }

    public getNewsArticles(): Observable<NewsArticlesResponse> {
        return this.httpClient.get<NewsArticlesResponse>(this.webApiEndpoint + '/newsArticles');
    }
}
