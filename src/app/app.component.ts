import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'hacker-news';
  isToggle = false;
  resizeObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;
  menus = [
    {
      id: 1,
      name: 'Welcome',
      url: 'https://news.ycombinator.com/newswelcome.html',
      active: false,
    },
    {
      id: 2,
      name: 'New',
      url: 'https://news.ycombinator.com/newest',
      active: false,
    },
    {
      id: 3,
      name: 'Threads',
      url: 'https://news.ycombinator.com/threads?id=kien_phamtrung',
      active: false,
    },
    {
      id: 4,
      name: 'Past',
      url: 'https://news.ycombinator.com/front',
      active: false,
    },
    {
      id: 5,
      name: 'Comments',
      url: 'https://news.ycombinator.com/newcomments',
      active: false,
    },
    {
      id: 6,
      name: 'Ask',
      url: 'https://news.ycombinator.com/ask',
      active: false,
    },
    {
      id: 7,
      name: 'Show',
      url: 'https://news.ycombinator.com/show',
      active: false,
    },
    {
      id: 8,
      name: 'Jobs',
      url: 'https://news.ycombinator.com/jobs',
      active: false,
    },
    {
      id: 9,
      name: 'Submit',
      url: 'https://news.ycombinator.com/submit',
      active: false,
    },
    { id: 10, name: 'Best', url: '', active: true },
  ];

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      if (window.innerWidth > 750) {
        this.isToggle = false;
      }
    });
  }

  toggleChanged(isToggle: boolean) {
    this.isToggle = isToggle;
  }

  onClickSidebar(event: any) {
    if (event.id !== 10 && event.id) {
      window.open(event.url, '_blank');
    }
    this.isToggle = !this.isToggle;
  }
}
