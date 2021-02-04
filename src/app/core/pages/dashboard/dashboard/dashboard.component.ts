import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PostsService} from '../../../services/posts/posts.service';
import {PostResponseInterface} from '../../../interfaces/responses/post-response.interface';
import {PaginationInterface} from '../../../interfaces/requests/pagination.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  public dataSource: PostResponseInterface;
  public pageSize = 1;
  public allPosts = 0;
  public isLoaded = false;

  constructor(private postsService: PostsService) {
  }

  public ngAfterViewInit(): void {
    this.getPosts();
  }

  private getPosts(pagination?: PaginationInterface): void {
    this.postsService.getPosts(pagination).subscribe((response) => {
      this.dataSource = response;
      this.dataSource.data ? this.isLoaded = true : this.isLoaded = false;
      this.allPosts = response.data.length;
    });
  }

  public changePageSize(page: { pageIndex: number; pageSize: number; previousPageIndex: number; }): void {
    this.pageSize = page.pageSize;
    const paginationConfig: PaginationInterface = {
      current_page: page.pageIndex,
      per_page: this.pageSize,
      last_page: this.dataSource.meta.last_page,
      prev: this.dataSource.links.prev,
      next: this.dataSource.links.next,
      from: this.dataSource.meta.from,
      to: this.dataSource.meta.to,
      total: this.dataSource.meta.total
    };
    this.getPosts(paginationConfig);
  }


}
