import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  commentText: string;
  attachedFile: File;

  constructor() {}

  ngOnInit() {}

  attachFile(event) {
    this.attachedFile = event.target.files[0];
  }

  submitComment() {
    console.log('Comment text: ', this.commentText);
    console.log('Attached file: ', this.attachedFile);
    // code to server goes here
  }
}
