import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    addFeedback (feedback: Feedback): Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
      return this.http.post<Feedback>(baseURL, feedback, httpOptions)
        .pipe(catchError((this.processHTTPMsgService.handleError))
        );
    }
    /*
    putFeedback(feedback: Feedback): Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post<Feedback>(baseURL + 'feedback', httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
    */
}
