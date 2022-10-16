export interface Response<T> {
  data: T;
}
export interface Articles {
  articles: Article[];
}

export interface ArticleRes {
  article: Article;
}

export interface Article {
  content: string;
  coverImageUrl: string;
  description: string;
  subtitle: string;
  title: string;
  url: string;
}
