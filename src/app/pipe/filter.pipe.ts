import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: any): any {

    //initialize an empty array to store filtererd products

    const result: any=[]

    if(!value || filterString=="" || propName==""){
      return value
    }
    else{
      value.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }

  }

}
