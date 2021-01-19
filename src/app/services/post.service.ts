import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    {
      title: 'Bienvenue',
      content: 'Ceci est mon blog, vous pouvez créer de nouveaux posts, en supprimer ou bien tous les supprimer',
      loveIts: 1,
      created_at: 1610950000000,
    }
  ];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }



  // Création d'un nouveau post
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  // Suppression d'un post
  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  removeAllPost(posts: number) {
    this.posts.splice(posts);
  }

}
