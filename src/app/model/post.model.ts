export class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: number;

  constructor( title: string,  content: string,  loveIts?: any, created_at?: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}
