import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http:HttpClient,private router:Router) { }

    fetchItem(name){
        return this.http.get("https://api.github.com/users/"+name+"/repos");
      }
    
  
  
}
