import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue='';
  newPost='adi';
  // newPost='aditya';
  // onAddPost(postInput:HTMLTextAreaElement){
    
  //   // this.newPost=this.enteredValue+"Hi u ar at aditya's page" + postInput.value;
  //   console.log();
  //   this.newPost=postInput.value;

  // }

}
