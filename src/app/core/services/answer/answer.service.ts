import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostResponseInterface} from '../../interfaces/responses/post-response.interface';
import {buildQueryParams} from '../../utils/buildParams';
import {Observable} from 'rxjs';
import {AnswerResponseInterface} from '../../interfaces/responses/answer-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {
  }

  public getAnswersByPost(id: number): Observable<AnswerResponseInterface> {
    return this.http.get<AnswerResponseInterface>(`/api/v1/posts/${id}/answers`);

  }
}
