import { NewsCategory } from 'app/http-services/classification/news-category.enum';

export interface NewsArticleResponse {
    id: number;
    title: string;
    text: string;
    source: string;
    newsCategory: NewsCategory;
}
