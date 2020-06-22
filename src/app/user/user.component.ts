import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      url:string;
      login:string;
      html_url:string;
      public_repos:number;
      avatar_url: string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/ramzanthenolph?access_token=").subscribe(data=>{
      this.user = new User(data.url, data.login, data.html_url, data.public_repos, data.avatar_url,)
    })
  }

}
