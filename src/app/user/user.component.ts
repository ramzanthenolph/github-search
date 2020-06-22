import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  allrepos:Repo;
  constructor(public myService:SearchService, private repoService:SearchService) { }
  searchs(searchUsername) {
    this.myService.searchUser(searchUsername).then(
      (success)=>{
        this.user = this.myService.user;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchUsername).then(
        (results)=>{
          this.allrepos =this.repoService.allrepos
          console.log(this.allrepos);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.searchs('ramzanthenolph')
  }

}
