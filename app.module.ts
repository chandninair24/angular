import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SampleComponent } from './sample/sample.component';
import { SalaryPipe } from './salary.pipe';
import { PnfComponent } from './pnf/pnf.component';
import { LoginComponent } from './login/login.component';

const routes:Routes =[
	{path: 'employee', component: EmployeeComponent},
	{path: 'sample', component: SampleComponent},
	{path: '', component: EmployeeComponent},
	{path: '**', component: PnfComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SampleComponent,
    SalaryPipe,
    PnfComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
