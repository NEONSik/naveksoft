import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {PostComponent} from './post/post.component';
import {AnswerComponent} from './answer/answer.component';


@NgModule({
  declarations: [HeaderComponent, PostComponent, AnswerComponent],
  exports: [HeaderComponent, PostComponent, AnswerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule {
}
