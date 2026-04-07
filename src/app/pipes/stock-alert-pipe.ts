import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockAlert',
  standalone: true
})
export class StockAlertPipe implements PipeTransform {

  transform(quantity: number): string {
    if (quantity <= 2) return 'Low Stock';
    if (quantity <= 5) return 'Medium Stock';
    return 'In Stock';
  }
}