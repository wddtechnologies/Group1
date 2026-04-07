import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JewelryService } from '../../services/jewelry.service';
import { JewelryItem } from '../../models/jewelry.model';

/**
 * EditJewelryComponent
 * ---------------------
 * This component is responsible for editing an existing jewelry item.
 * It fetches item details using ID from URL and allows updating it.
 */
@Component({
  selector: 'app-edit-jewelry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-jewelry.html'
})
export class EditJewelryComponent implements OnInit {

  /**
   * Holds the current jewelry item data
   * which will be displayed and edited in the form.
   */
  item: JewelryItem = {
    name: '',
    category: 'Ring',
    price: 0,
    quantity: 0,
    image: '',
    description: ''
  };

  /**
   * Constructor injects required services:
   * ActivatedRoute → to get ID from URL
   * JewelryService → to call API
   * Router → to navigate after update
   */
  constructor(
    private route: ActivatedRoute,
    private service: JewelryService,
    private router: Router
  ) {}

  /**
   * Lifecycle hook:
   * Runs when component loads.
   * Gets ID from URL and fetches item data from API.
   */
  ngOnInit() {
    // Get ID from route parameter (URL)
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID:', id); // Debugging purpose

    // Fetch item details from backend using ID
    this.service.getById(id).subscribe(data => {
      console.log('DATA:', data); // Debugging purpose

      // Assign fetched data to form model
      this.item = data;
    });
  }

  /**
   * Update jewelry item
   * Sends updated data to API and navigates back to list page
   */
  updateJewelry() {
    this.service.update(this.item).subscribe(() => {
      alert('Updated Successfully!');
      this.router.navigate(['/']);
    });
  }
}