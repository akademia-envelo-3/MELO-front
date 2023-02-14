import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comment = '';
  attachedFile: any;

  constructor() {}

  ngOnInit() {}

  attachFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.attachedFile = reader.result;
    };

    reader.readAsDataURL(file);
  }

  isImage(file) {
    return file.startsWith('data:image/');
  }

  addComment() {
    console.log(this.comment, this.attachedFile);
  }
}
