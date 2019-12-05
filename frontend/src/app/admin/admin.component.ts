import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  newdata:any
  public newarr=new Array();
  
  
  constructor(private cs: ApiserviceService, private router:Router) {}

  
fetchItem(name: any){
  console.log(name)
  this.cs.fetchItem(name).subscribe(res=>{this.newdata = res;console.log(this.newdata);
  
  });
}
showParent(a:any,b:any,c:any) {
   var newobj={name:a,watchers:b,forks:c};
  this.newarr.push(newobj);
  console.log(this.newarr);

  
}

   ngOnInit() { }





}
