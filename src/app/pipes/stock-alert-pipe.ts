import { Pipe, PipeTransform } from '@angular/core';

/**
 * StockAlertPipe
 * Transforms a quantity number into a stock status label.
 * Usage: {{ item.quantity | stockAlert }}
 * Returns: 'Low Stock', 'Medium Stock', or 'In Stock'
 */
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

/**
 * StockBadgeClassPipe
 * Returns the CSS badge class based on stock quantity.
 * Usage: [ngClass]="item.quantity | stockBadgeClass"
 */
@Pipe({
  name: 'stockBadgeClass',
  standalone: true
})
export class StockBadgeClassPipe implements PipeTransform {

  transform(quantity: number): string {
    if (quantity <= 2) return 'badge badge-low';
    if (quantity <= 5) return 'badge badge-medium';
    return 'badge badge-in-stock';
  }
}
