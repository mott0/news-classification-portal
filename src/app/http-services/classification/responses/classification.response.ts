import { NewsCategory } from 'app/http-services/classification/news-category.enum';

export interface ClassificationResponse {
    newsCategory: NewsCategory;
}
