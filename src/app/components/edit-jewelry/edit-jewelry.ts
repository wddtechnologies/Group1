import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { JewelryService } from '../../services/jewelry.service';
import { JewelryItem } from '../../models/jewelry.model';

/**
 * EditJewelryComponent
 * Fetches item details using ID from URL and allows updating it.
 */
@Component({
  selector: 'app-edit-jewelry',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-jewelry.html',
  styleUrl: './edit-jewelry.css'
})
export class EditJewelryComponent implements OnInit {

  /** Current jewelry item data for editing */
  item: JewelryItem = {
    name: '',
    category: 'Ring',
    price: 0,
    quantity: 0,
    image: '',
    description: ''
  };

  /** State flags */
  isLoading: boolean = true;
  isSubmitting: boolean = false;
  errorMessage: string = '';

  /** Available categories */
  categories: string[] = ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Anklets'];

  constructor(
    private route: ActivatedRoute,
    private service: JewelryService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * On init: get ID from URL, fetch item data from API.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage = 'No item ID provided.';
      this.isLoading = false;
      return;
    }

    this.service.getById(id).subscribe({
      next: (data) => {
        this.item = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load item:', err);
        this.errorMessage = 'Failed to load item details. The item may not exist.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  /**
   * Validates and sends the updated item to the API.
   */
  updateJewelry(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.service.update(this.item).subscribe({
      next: () => {
        this.router.navigate(['/jewelry']);
      },
      error: (err) => {
        console.error('Failed to update item:', err);
        this.errorMessage = 'Failed to update item. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}
