import { Component } from '@angular/core';

@Component({
  selector: 'app-aditya',
  templateUrl: './aditya.component.html',
  styleUrls: ['./aditya.component.css']
})
export class AdityaComponent {
  posts=[
    {title:"First post",content:"adi is good"},
    {title:"second post",content:" second adi is good"},
    {title:"third post",content:"third is good"},
    {title:"fourth post",content:"fourth is good"}
  ];
}
