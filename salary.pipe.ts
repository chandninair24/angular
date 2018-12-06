import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inhandsalary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, tax: any): any {
	tax=tax>1 ? tax : 10;
	value=(value)-((value) * tax/100);
    return value;
  }

}
