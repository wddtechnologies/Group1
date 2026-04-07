/**
 * Interface representing a Jewelry Item in the inventory system.
 * This acts as the single source of truth for data structure across the app.
 */
export interface JewelryItem {
  /** Unique identifier from the database (Optional for new items) */
  id?: number;

  /** The name of the jewelry piece (e.g., "Silver Infinity Ring") */
  name: string;

  /** The type of jewelry  */
  category: 'Ring' | 'Necklace' | 'Bracelet' | 'Earrings';

  /** The retail price of the item */
  price: number;

  /** The number of items currently available in stock */
  quantity: number;

  /** A detailed explanation of the item's features and materials */
  description: string;

  /** The URL path to the product image */
  image?: string;
}