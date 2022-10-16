import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/type';

@Component({
  selector: 'oivan-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  loading = false;
  article: Article | undefined;
  defaultImage = 'assets/imgs/default-img.png';
  
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    const url: string = this.route.snapshot.paramMap.get('url') || '';
    this.getArticle(url);
  }

  getArticle(url: string) {
    this.loading = true;
    this.articlesService
      .getArticle(url)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(({ data }) => {
        this.article = data.article;
        console.log(data);
      });
  }
}
