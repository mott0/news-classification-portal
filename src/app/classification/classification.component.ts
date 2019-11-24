import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NewsCategory } from 'app/http-services/classification/news-category.enum';
import { ClassificationService } from 'app/http-services/classification/classificaton.service';
import { ClassificationRequest } from 'app/http-services/classification/requests/classification.request';

@Component({
    selector: 'app-classification',
    templateUrl: './classification.component.html',
    styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent {
    public newsCategory: NewsCategory | null = null;
    public textControl: FormControl;

    constructor(
        private classificationService: ClassificationService
    ) {
        this.textControl = new FormControl();
    }

    public canClassify(): boolean {
        return this.textControl.value != null && this.textControl.value.toString().trim().length > 0;
    }

    public classify(): void {
        const request: ClassificationRequest = {
            text: this.textControl.value
        };
        this.classificationService.classify(request)
            .subscribe(response => {
                this.newsCategory = response.newsCategory;
            });
    }
}
