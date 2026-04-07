import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JewelryItem } from '../models/jewelry.model';

/**
 * Service responsible for handling all API operations
 * related to jewelry inventory (CRUD operations).
 * Communicates with json-server running on port 3000.
 */
@Injectable({
  providedIn: 'root'
})
export class JewelryService {

  /** Base URL for the JSON Server API */
  private apiUrl = 'http://localhost:3000/jewelry';

  constructor(private http: HttpClient) {}

  /**
   * GET all jewelry items from the API.
   * @returns Observable array of JewelryItem
   */
  getAll(): Observable<JewelryItem[]> {
    return this.http.get<JewelryItem[]>(this.apiUrl);
  }

  /**
   * GET a single jewelry item by its ID.
   * @param id - The unique identifier of the jewelry item
   * @returns Observable of a single JewelryItem
   */
  getById(id: string | number | null): Observable<JewelryItem> {
    return this.http.get<JewelryItem>(`${this.apiUrl}/${id}`);
  }

  /**
   * POST a new jewelry item to the API.
   * @param item - The JewelryItem object to add
   * @returns Observable of the created JewelryItem
   */
  add(item: JewelryItem): Observable<JewelryItem> {
    return this.http.post<JewelryItem>(this.apiUrl, item);
  }

  /**
   * PUT (update) an existing jewelry item.
   * @param item - The JewelryItem object with updated data
   * @returns Observable of the updated JewelryItem
   */
  update(item: JewelryItem): Observable<JewelryItem> {
    return this.http.put<JewelryItem>(`${this.apiUrl}/${item.id}`, item);
  }

  /**
   * DELETE a jewelry item by its ID.
   * @param id - The unique identifier of the item to delete
   * @returns Observable of the deletion response
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
