import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { finalize, fromEvent, Observable, Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/type';

@Component({
  selector: 'oivan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  loading = false;
  pageNumber = 1;
  articles: any[] = [];
  reload = true;

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight - 1
    ) {
      if (this.reload) {
        this.pageNumber++;
        this.getActicles();
      } else {
        removeEventListener('scroll', () => {});
      }
    }
  }

  constructor(
    private router: Router,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.getActicles();
  }

  getActicles() {
    this.loading = true;

    this.articlesService
      .getActicles(this.pageNumber)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(({ data }) => {
        if (data.articles.length > 0) {
          this.articles = this.articles.concat(data.articles);
        } else {
          this.reload = false;
        }
      });
  }

  gotoDetail(article: Article) {
    this.router.navigate(['detail', article.url]);
  }
}
