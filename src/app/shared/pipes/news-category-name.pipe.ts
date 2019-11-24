import { Pipe, PipeTransform } from '@angular/core';

import { NewsCategory } from 'app/http-services/classification/news-category.enum';

@Pipe({
    name: 'newsCategoryName'
})
export class NewsCategoryNamePipe implements PipeTransform {

    public transform(value: NewsCategory, args?: any): any {
        if (value == null) {
            return '';
        }

        switch (value) {
            case NewsCategory.CULTURE:
                return 'Культура';
            case NewsCategory.ECONOMICS:
                return 'Экономика';
            case NewsCategory.INCIDENTS:
                return 'Происшествия';
            case NewsCategory.POLITICS:
                return 'Политика';
            case NewsCategory.SCIENCE:
                return 'Наука';
            case NewsCategory.SOCIETY:
                return 'Общество';
            case NewsCategory.TECHNOLOGIES:
                return 'Технологии';
            case NewsCategory.TRANSPORT:
                return 'Транспорт';
            default:
                console.error('Неизвестная категория: ' + value);
                return '';
        }
    }
}
