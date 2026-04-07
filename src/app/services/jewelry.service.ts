import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JewelryItem } from '../models/jewelry.model';

@Injectable({
  providedIn: 'root'
})

export class JewelryService {

  private apiUrl = 'http://localhost:3000/jewelry';

  constructor(private http: HttpClient) {}

  // =========================
  // GET ALL ITEMS
  // =========================
  getAll(): Observable<JewelryItem[]> {
    return this.http.get<JewelryItem[]>(this.apiUrl);
  }

  // =========================
  //  GET ONE ITEM BY ID
  // =========================
  getById(id: number): Observable<JewelryItem> {
    return this.http.get<JewelryItem>(`${this.apiUrl}/${id}`);
  }

  // =========================
  //  ADD NEW ITEM
  // =========================
  add(item: JewelryItem): Observable<JewelryItem> {
    return this.http.post<JewelryItem>(this.apiUrl, item);
  }

  // =========================
  //  UPDATE ITEM
  // =========================
  update(updatedItem: JewelryItem): Observable<JewelryItem> {
    return this.http.put<JewelryItem>(`${this.apiUrl}/${updatedItem.id}`, updatedItem);
  }

  // =========================
  //  DELETE ITEM
  // =========================
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}

  /**~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
        NEED TO BE UPDATED TO DB
  *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


  // =========================
  //  SEARCH (Optional but useful)
  // =========================
  searchByName(term: string): JewelryItem[] {
    return this.load().filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  // =========================
  // FILTER BY CATEGORY
  // =========================
  filterByCategory(category: string): JewelryItem[] {
    return this.load().filter(item => item.category === category);
  }

  // =========================
  // UPDATE QUANTITY (Inventory Logic)
  // =========================
  updateQuantity(id: number, change: number): void {
    const items = this.load().map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + change
        };
      }
      return item;
    });

    this.save(items);
  }

  // =========================
  // PRIVATE METHODS
  // =========================

  private validate(item: JewelryItem): void {
    if (!item.name || item.name.trim() === '') {
      throw new Error('Name is required');
    }

    if (!item.category) {
      throw new Error('Category is required');
    }

    if (item.price <= 0) {
      throw new Error('Price must be greater than 0');
    }

    if (item.quantity < 0) {
      throw new Error('Quantity cannot be negative');
    }
  }
}
*/ 