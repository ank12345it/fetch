import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { isNgContainer } from '@angular/compiler';
import { Jpass } from './jpass';
import { Dataget } from './Dataget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'anmon';
  constructor(private http:HttpClient){}
  id="";
  name="";
  add="";
  age="";
  domain="";
  e_name="";
  public response:any=[];
  
  
  register(){
    const data=new Jpass(this.id,this.name,this.add,this.age,this.domain);
     const c = data;
    const req=this.http.post('http://localhost:8091/api/employee',
    c).toPromise()
    .then((data:any)=>{
      // document.write(data);
      console.log(data);
    })
  }
  extract()
  {
    const req=this.http.get<Dataget[]>('http://localhost:8091/api/employee/'+this.e_name).subscribe(
      data=>{
        this.response=data;
      }

    )
  }
  ngOnInit(){}
}
