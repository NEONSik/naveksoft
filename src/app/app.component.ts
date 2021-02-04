import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'naveksoft';

  constructor() {
  }

  public ngOnInit(): void {
    // this.pusherService.channel.bind('new-event', data => {
    //   this.likes = data.likes;
    // });
  }
}
