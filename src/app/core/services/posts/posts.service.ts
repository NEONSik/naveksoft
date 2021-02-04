import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PostResponseInterface} from '../../interfaces/responses/post-response.interface';
import {PaginationInterface} from '../../interfaces/requests/pagination.interface';
import {buildQueryParams} from '../../utils/buildParams';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  public getPosts(pagination?: PaginationInterface): Observable<PostResponseInterface> {
    return this.http.get<PostResponseInterface>('/api/v1/posts', {params: buildQueryParams(pagination)});
  }

  public deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`/api/v1/posts/${id}`);
  }
}
