import { StockAlertPipe } from './stock-alert-pipe';

describe('StockAlertPipe', () => {

  // 💎 Creates an instance of the pipe
  it('should create an instance', () => {
    const pipe = new StockAlertPipe();
    expect(pipe).toBeTruthy();
  });

  // 💎 Tests low stock condition
  it('should return "Low Stock" when quantity is 2 or less', () => {
    const pipe = new StockAlertPipe();
    expect(pipe.transform(2)).toBe('Low Stock');
  });

  // 💎 Tests medium stock condition
  it('should return "Medium Stock" when quantity is between 3 and 5', () => {
    const pipe = new StockAlertPipe();
    expect(pipe.transform(4)).toBe('Medium Stock');
  });

  // 💎 Tests in stock condition
  it('should return "In Stock" when quantity is greater than 5', () => {
    const pipe = new StockAlertPipe();
    expect(pipe.transform(10)).toBe('In Stock');
  });

});