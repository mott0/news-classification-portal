import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { ClassificationRequest } from 'app/http-services/classification/requests/classification.request';
import { ClassificationResponse } from 'app/http-services/classification/responses/classification.response';


@Injectable({
    providedIn: 'root'
})
export class ClassificationService {
    private readonly webApiEndpoint: string;

    constructor(
        private httpClient: HttpClient
    ) {
        this.webApiEndpoint = environment.webApiEndpoint;
    }

    public classify(request: ClassificationRequest): Observable<ClassificationResponse> {
        return this.httpClient.post<ClassificationResponse>(this.webApiEndpoint + '/classification', request);
    }
}
