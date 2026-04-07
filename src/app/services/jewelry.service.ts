import { Injectable } from '@angular/core';
import { JewelryItem } from '../models/jewelry.model';

@Injectable({
  providedIn: 'root'
})
export class JewelryService {

  private storageKey = 'jewelryItems';

  constructor() {}

  // =========================
  // GET ALL ITEMS
  // =========================
  getAll(): JewelryItem[] {
    return this.load();
  }

  // =========================
  //  GET ONE ITEM BY ID
  // =========================
  getById(id: number): JewelryItem | undefined {
    return this.load().find(item => item.id === id);
  }

  // =========================
  //  ADD NEW ITEM
  // =========================
  add(item: JewelryItem): void {
    const items = this.load();

    this.validate(item);

    // generate ID
    item.id = Date.now();

    items.push(item);
    this.save(items);
  }

  // =========================
  //  UPDATE ITEM
  // =========================
  update(updatedItem: JewelryItem): void {
    if (!updatedItem.id) {
      throw new Error('Item must have an ID to update');
    }

    const items = this.load();

    const index = items.findIndex(item => item.id === updatedItem.id);

    if (index === -1) {
      throw new Error('Item not found');
    }

    this.validate(updatedItem);

    items[index] = updatedItem;

    this.save(items);
  }

  // =========================
  //  DELETE ITEM
  // =========================
  delete(id: number): void {
    const items = this.load().filter(item => item.id !== id);
    this.save(items);
  }

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

  private load(): JewelryItem[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private save(items: JewelryItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

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