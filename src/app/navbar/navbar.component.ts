import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchUsername:string;
  @Output() searchOutput = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {}
    search(){
      this.searchOutput.emit(this.searchUsername);
      this.searchUsername = "";
    }
  

}
