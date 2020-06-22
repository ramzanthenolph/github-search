import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user:User;
  allrepos:Repo;
  constructor(private http:HttpClient) {
    this.user= new User("","","",0,"",);
    this.allrepos= new Repo("","",new Date,"");
   }
   searchUser(searchUsername:string){
     interface Responce{
       url:string;
       login:string;
       html_url:string;
       public_repos:number;
       avatar_url:string;
     }
     return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchUsername+'?access_token=').toPromise().then(
        (result) => {
          this.user = result;
          console.log(this.user);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    
   }
   getRepos(searchUsername){
     interface RepoResponce{
       name:string;
       description:string;
       created_at:Date;
       html_url:string;
     }
     return new Promise((resolve,reject)=>{
      this.http.get<RepoResponce>('https://api.github.com/users/'+searchUsername+"/repos?order=created&sort=asc?access_token=").toPromise().then(
        (results) => {
          this.allrepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );  
    });
   }
}
