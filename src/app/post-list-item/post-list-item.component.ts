import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostsService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: number;
  @Input() post: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {}

  onLoveIt() {
    this.postLoveIts++;
    this.post.loveIts = this.postLoveIts;
  }

  onDontLoveIt() {
    this.postLoveIts--;
    this.post.loveIts = this.postLoveIts;
  }

  onDeletePost(post: Post) {
    const confirmation = confirm('Voulez-vous supprimer ce post?');
    if (confirmation) {
      this.postService.removePost(post);
    }
  }
}
