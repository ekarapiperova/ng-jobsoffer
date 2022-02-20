import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class jobsService {

  private url = `${environment.apiUrl}/jobs`;

  constructor(private http: HttpClient) {
  }

  getjobs$(): Observable<job[]> {
    return this.http.get<job[]>(this.url);
  }

  getjob$(id: number): Observable<job> {
    const url = `${this.url}/${id}`;

    return this.http.get<job>(url);
  }

  postjob$(job: job): Observable<job> {
    return this.http.post<job>(this.url, job);
  }

  putjob$(job: job): Observable<job> {
    const url = `${this.url}/${job.id}`;

    return this.http.put<job>(url, job);
  }

  deletejob$(id: number): Observable<void> {
    const url = `${this.url}/${id}`;

    return this.http.delete<void>(url);
  }
}
