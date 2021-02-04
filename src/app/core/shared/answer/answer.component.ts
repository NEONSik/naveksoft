import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnswerService} from '../../services/answer/answer.service';
import {Observable, Subscription} from 'rxjs';
import {AnswerResponseInterface} from '../../interfaces/responses/answer-response.interface';
import {AnswerInterface} from '../../interfaces/models/answer.interface';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit, OnDestroy {

  @Input() public answer: AnswerInterface;

  private subscription$ = new Subscription();

  constructor(private answerService: AnswerService) {
  }

  public ngOnInit(): void {
  }


  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
