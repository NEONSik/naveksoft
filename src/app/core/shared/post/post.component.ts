import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PostInterface} from '../../interfaces/models/post.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AnswerService} from '../../services/answer/answer.service';
import {Subscription} from 'rxjs';
import {AnswerResponseInterface} from '../../interfaces/responses/answer-response.interface';
import {PostsService} from '../../services/posts/posts.service';
import {UserInterface} from '../../interfaces/models/user.interface';
import {UserService} from '../../services/user/user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('children', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          opacity: 1,
          'z-index': 3123123,
        })
      ),
      state(
        'hidden',
        style({
          height: '0px',
          opacity: 0,
          'z-index': '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('500ms cubic-bezier(0.16, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('500ms cubic-bezier(0.16, 0, 0.07, 1)')
      ),
      transition(
        'void => visibleAnimated, visibleAnimated => void',
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'visibleAnimated => void',
        animate('500ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() public postData: PostInterface;
  @Output() public onDelete = new EventEmitter<boolean>();

  private subscription$ = new Subscription();
  public answers: AnswerResponseInterface;
  public user: UserInterface;
  public canDelete = false;
  public isOpenedPost = false;

  constructor(private answerService: AnswerService,
              private userService: UserService,
              private postsService: PostsService) {
  }

  public ngOnInit(): void {
    this.getUserData();
  }

  private getUserData(): void {
    this.user = JSON.parse(this.userService.getUser());
    this.checkStatusUser();
  }

  private checkStatusUser(): void {
    this.canDelete = !!this.user?.is_admin || (this.user.id === this.postData.user.id);
  }

  public toggleOfPost(): void {
    this.isOpenedPost = !this.isOpenedPost;
    if (this.isOpenedPost) {
      this.getAnswersByPost();
    }
  }

  public getAnswersByPost(): void {
    this.subscription$.add(
      this.answerService
        .getAnswersByPost(this.postData.id)
        .subscribe((response) => {
          this.answers = response;
        })
    );
  }

  public deletePost(): void {
    this.subscription$.add(
      this.postsService
        .deletePost(this.postData.id)
        .subscribe((response) => {
          this.onDelete.emit(true);
        }));
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
