import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ClassificationComponent } from 'app/classification/classification.component';
import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ClassificationService } from 'app/http-services/classification/classificaton.service';

@NgModule({
    declarations: [
        AppComponent,
        ClassificationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [ClassificationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
