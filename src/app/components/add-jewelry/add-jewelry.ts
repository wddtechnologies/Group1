import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JewelryService } from '../../services/jewelry.service';
import { JewelryItem } from '../../models/jewelry.model';

/**
 * Component responsible for adding a new jewelry item to the inventory.
 * Uses template-driven forms with validation.
 */
@Component({
  selector: 'app-add-jewelry',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-jewelry.html',
  styleUrl: './add-jewelry.css'
})
export class AddJewelryComponent {

  /** Form model for the new jewelry item */
  item: JewelryItem = {
    name: '',
    category: 'Ring',
    price: 0,
    quantity: 0,
    image: '',
    description: ''
  };

  /** Submission state flags */
  isSubmitting: boolean = false;
  errorMessage: string = '';

  /** Available categories */
  categories: string[] = ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Anklets'];

  constructor(
    private service: JewelryService,
    private router: Router
  ) {}

  /**
   * Handles form submission.
   * Validates the form, sends POST request, and navigates back on success.
   */
  addJewelry(form: NgForm): void {
    if (form.invalid) {
      // Mark all fields as touched so validation errors show
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.service.add(this.item).subscribe({
      next: () => {
        this.router.navigate(['/jewelry']);
      },
      error: (err) => {
        console.error('Failed to add item:', err);
        this.errorMessage = 'Failed to add item. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}
