import { NewsArticleResponse } from 'app/http-services/articles/responses/news-article.response';

export interface NewsArticlesResponse {
    newsArticles: NewsArticleResponse[];
}
