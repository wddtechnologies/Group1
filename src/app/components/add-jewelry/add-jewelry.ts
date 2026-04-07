import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JewelryService } from '../../services/jewelry.service';
import { Router } from '@angular/router';
import { JewelryItem } from '../../models/jewelry.model';

/**
 * Component responsible for adding a new jewelry item to the inventory.
 * Uses Angular standalone component approach with FormsModule for two-way binding.
 */
@Component({
  selector: 'app-add-jewelry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-jewelry.html'
})
export class AddJewelryComponent {

  /**
   * Object representing the new jewelry item form data.
   * It follows the JewelryItem interface structure.
   * Default category is set to 'Ring' to satisfy strict typing.
   */
  item: JewelryItem = {
    name: '',
    category: 'Ring', // Default valid category (avoids TypeScript errors)
    price: 0,
    quantity: 0,
    image: '',
    description: ''
  };

  /**
   * Constructor injects:
   * - JewelryService → to handle API calls (add item)
   * - Router → to navigate after successful submission
   */
  constructor(
    private service: JewelryService,
    private router: Router
  ) {}

  /**
   * Method triggered when user clicks "Add Jewelry" button.
   * Sends POST request to API using the service.
   * On success:
   * - Shows confirmation alert
   * - Redirects user back to inventory list page
   */
  addJewelry() {
    this.service.add(this.item).subscribe(() => {
      alert('Jewelry Added Successfully!');

      // Navigate back to main inventory list
      this.router.navigate(['/']);
    });
  }
}