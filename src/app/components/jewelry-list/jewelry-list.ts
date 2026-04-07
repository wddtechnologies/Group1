import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JewelryService } from '../../services/jewelry.service';
import { JewelryItem } from '../../models/jewelry.model';
import { StockAlertPipe } from '../../pipes/stock-alert-pipe';
import { RouterModule } from '@angular/router';

/**
 * Component responsible for displaying all jewelry items in the inventory.
 * It handles data fetching, deletion, and sorting functionality.
 */
@Component({
  selector: 'app-jewelry-list',
  standalone: true,
  imports: [CommonModule, RouterModule, StockAlertPipe],
  templateUrl: './jewelry-list.html',
  styleUrl: './jewelry-list.css'
})
export class JewelryListComponent implements OnInit {

  /**
   * Array to store all jewelry items fetched from the API.
   */
  items: JewelryItem[] = [];

  /**
   * Injecting JewelryService to communicate with backend API.
   */
  constructor(private service: JewelryService) {}

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Calls loadItems() to fetch data from API.
   */
  ngOnInit(): void {
    this.loadItems();
  }

  /**
   * Fetches all jewelry items from the API.
   * Subscribes to the Observable and assigns data to the items array.
   */
  loadItems() {
    this.service.getAll().subscribe(data => {
      this.items = data;
    });
  }

  /**
   * Deletes a jewelry item by ID.
   * Shows confirmation dialog before deleting.
   * After deletion, reloads the updated list from API.
   */
  deleteItem(id: number) {
    if (confirm('Delete this item?')) {
      this.service.delete(id).subscribe(() => {
        this.loadItems(); // Refresh list after deletion
      });
    }
  }

  /**
   * Sorts the jewelry items in descending order based on quantity.
   * Creates a copy of the array before sorting to avoid mutating original data.
   */
  sortByQuantity() {
    this.items = [...this.items].sort((a, b) => b.quantity - a.quantity);
  }
}