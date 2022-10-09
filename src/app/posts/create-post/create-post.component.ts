import { Component, OnInit } from '@angular/core';
import { postCreateDTO } from '../posts';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Create Post';

  store(post: postCreateDTO) {
    console.log(post);
  }

}
