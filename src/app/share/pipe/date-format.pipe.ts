import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
declare var moment:any;
@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform {
  transform(value: number, exponent: string): any {    
      if (!value){
        return ''
      }
      return moment(value).format(exponent)
  }
}