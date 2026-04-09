import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JewelryService } from '../../services/jewelry.service';
import { JewelryItem } from '../../models/jewelry.model';
import { StockAlertPipe, StockBadgeClassPipe, StockCardClassPipe } from '../../pipes/stock-alert-pipe';

/**
 * Component responsible for displaying all jewelry items in the inventory.
 * Handles data fetching, deletion, sorting, and filtering.
 */
@Component({
  selector: 'app-jewelry-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, StockAlertPipe, StockBadgeClassPipe, StockCardClassPipe],
  templateUrl: './jewelry-list.html',
  styleUrl: './jewelry-list.css'
})
export class JewelryListComponent implements OnInit {

  /** All jewelry items fetched from API */
  items: JewelryItem[] = [];

  /** Filtered items displayed in the view */
  filteredItems: JewelryItem[] = [];

  /** Current search term for filtering */
  searchTerm: string = '';

  /** Controls visibility of the low-stock popup */
  showLowStockPopup: boolean = false;

  /** Returns the list of low-stock items */
  get lowStockItems(): JewelryItem[] {
    return this.items.filter(item => item.quantity <= 2);
  }

  /** Opens the low-stock popup */
  openLowStockPopup(): void {
    this.showLowStockPopup = true;
  }

  /** Closes the low-stock popup */
  closeLowStockPopup(): void {
    this.showLowStockPopup = false;
  }

  /** Current category filter */
  selectedCategory: string = '';

  /** Loading state indicator */
  isLoading: boolean = false;

  /** Error message if API call fails */
  errorMessage: string = '';

  /** Available categories for the filter dropdown */
  categories: string[] = ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Anklets'];

  constructor(
    private service: JewelryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  /**
   * Fetches all jewelry items from the API.
   * Includes loading state and error handling.
   */
  loadItems(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.service.getAll().subscribe({
      next: (data) => {
        this.items = data;
        this.applyFilters();
        this.isLoading = false;
        // forces change detection so angular updates the UI immediately
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load items:', err);
        this.errorMessage = 'Failed to load inventory. Make sure json-server is running (npm run db).';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  /**
   * Deletes a jewelry item by ID after user confirmation.
   */
  deleteItem(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.delete(id).subscribe({
        next: () => {
          this.loadItems();
        },
        error: (err) => {
          console.error('Failed to delete item:', err);
          this.errorMessage = 'Failed to delete item. Please try again.';

        }
      });
    }
  }

  /**
   * Sorts items by quantity in descending order.
   */
  sortByQuantity(): void {
    this.filteredItems = [...this.filteredItems].sort((a, b) => b.quantity - a.quantity);
  }

  /**
   * Sorts items by price in ascending order.
   */
  sortByPrice(): void {
    this.filteredItems = [...this.filteredItems].sort((a, b) => a.price - b.price);
  }

  /**
   * Applies both search and category filters to the items list.
   */
  applyFilters(): void {
    let result = [...this.items];

    // Filter by category
    if (this.selectedCategory) {
      result = result.filter(item => item.category === this.selectedCategory);
    }

    // Filter by search term (name or description)
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      );
    }

    this.filteredItems = result;
  }

  /**
   * Returns the total inventory value of filtered items.
   */
  get totalValue(): number {
    return this.filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  /**
   * Returns count of low-stock items (quantity <= 2).
   */
  get lowStockCount(): number {
    return this.items.filter(item => item.quantity <= 2).length;
  }
}

