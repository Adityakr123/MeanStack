import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HostListener} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm=new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')

  })
  title = 'meanMosh';
  counter = 0;
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }
  courses =[1,2];
  viewMode='somethignelse';
  LoginUser(item:any){
    console.warn(item);

  }
  
 
}
