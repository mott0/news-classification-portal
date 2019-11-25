import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClassificationComponent } from 'app/classification/classification.component';
import { ArticlesComponent } from 'app/articles/articles.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                children: [
                    {
                        path: '',
                        redirectTo: 'classification',
                        pathMatch: 'full'
                    },
                    {
                        path: 'classification',
                        component: ClassificationComponent
                    },
                    {
                        path: 'articles',
                        component: ArticlesComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'classification',
                        pathMatch: 'full'
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
