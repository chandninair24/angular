import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  classtouse:string='class2';
  useclass3:boolean=true;
  data:boolean=false;
  employees: any[]=[
  {id:101, firstName: "chandni", lastName:"nair", salary:2000, department: "PHY", doj:"01/01/2017"},
  {id:102, firstName: "chandni", lastName:"nair",salary:60000, department: "CHEM", doj:"03/11/2017"},
  {id:103, firstName: "chandni", lastName:"nair",salary:80000, department: "ENG", doj:"04/08/2017"},
  {id:104, firstName: "chandni", lastName:"nair",salary:10000, department: "SPRING", doj:"01/01/2017"},
  {id:105, firstName: "chandni", lastName:"nair4",salary:10000, department: "JAVA", doj:"01/01/2017"},
  {id:106, firstName: "chandni", lastName:"nairr5",salary:10000, department: "POKEMON", doj:"01/01/2017"}
  ];
 
   condition:boolean;
     buttonClick():void{
      this.condition=!this.condition;
     }
  
  
  constructor() { 
  
  }

  ngOnInit() {
  }
  

}
