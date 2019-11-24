import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClassificationComponent } from 'app/classification/classification.component';

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
