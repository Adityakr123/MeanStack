import { Component } from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent {
  posts=[
    {title:"First post",content:"adi is good"},
    {title:"second post",content:" second adi is good"},
    {title:"third post",content:"third is good"},
    {title:"fourth post",content:"fourth is good"}
  ];
}
