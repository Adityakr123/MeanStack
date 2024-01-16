import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue='';
  newPost='No content';
  onAddPost(postInput:HTMLTextAreaElement){
    
    this.newPost=this.enteredValue+"Hi u ar at aditya's page" + postInput.value;

  }
}