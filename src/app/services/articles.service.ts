import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { catchError, Observable } from 'rxjs';
import { Article, ArticleRes, Articles, Response } from '../type';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private apollo: Apollo) {}

  getActicles(pageNumber: number): Observable<Response<Articles>> {
    return this.apollo.query({
      query: gql`query{
          articles(pageNumber: ${pageNumber}) {
            content
            coverImageUrl
            description
            subtitle
            title
            url
          }
        }`,
    });
  }

  getArticle(url: string): Observable<Response<ArticleRes>> {
    console.log(url)
    return this.apollo.query({
      query: gql`query{
        article(url: "${url}") 
        {
          content
          coverImageUrl
          description
          subtitle
          title
          url
        }
      }`
    });
  }
}
