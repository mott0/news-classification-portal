import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NewsCategoryNamePipe } from 'app/shared/pipes/news-category-name.pipe';

@NgModule({
    imports: [
        // Angular modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        // Pipes
        NewsCategoryNamePipe
    ],
    exports: [
        // Angular modules
        CommonModule,
        ReactiveFormsModule,
        // Pipes
        NewsCategoryNamePipe
    ],
    entryComponents: [],
    providers: []
})

export class SharedModule { }
