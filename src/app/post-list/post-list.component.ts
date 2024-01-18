import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts=[
    {title:"First post",content:"adi is good"},
    {title:"second post",content:" second adi is good"},
    {title:"third post",content:"third is good"},
    {title:"fourth post",content:"fourth is good"}
  ];
}
