# Jewelry Inventory Manager — Group 1

An Angular 21 CRUD application for managing a jewelry store inventory. Built with standalone components, template-driven forms, Bootstrap 5, and json-server as a mock REST API.

## Features

- **View Inventory** — Card-based grid with product images, prices, and stock status badges
- **Add / Edit / Delete** — Full CRUD operations with form validation
- **Search & Filter** — Real-time search by name/description and category dropdown filter
- **Sort** — Sort by quantity or price
- **Dashboard Summary** — Total items count, total inventory value, and low-stock alerts
- **Stock Alert Pipe** — Custom pipe that displays color-coded stock status badges
- **Low Stock Items Popup** - Click low stock quantity card to view which items are low in stock in 1 quick glance 
- **Error Handling** — User-friendly error messages with retry buttons
- **Loading States** — Spinner indicators during API calls
- **Responsive Design** — Mobile-friendly layout using Bootstrap grid

## Tech Stack

- Angular 21 (standalone components)
- TypeScript 5.9
- Bootstrap 5.3
- json-server (mock REST API)
- RxJS

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/your-repo/Group1.git
cd Group1
npm install
```

### Running the App

**Terminal 1 — Start the mock API server:**
```bash
npm run db
```
This starts json-server on `http://localhost:3000`.

**Terminal 2 — Start the Angular dev server:**
```bash
npm start
```
Navigate to `http://localhost:4200`.

## Project Structure

```
src/app/
├── components/
│   ├── nav/              → Navigation bar
│   ├── jewelry-list/     → Main inventory view with search/filter/sort
│   ├── add-jewelry/      → Add new item form with validation
│   └── edit-jewelry/     → Edit existing item form
├── models/
│   └── jewelry.model.ts  → JewelryItem interface
├── pipes/
│   └── stock-alert-pipe.ts → StockAlertPipe & StockBadgeClassPipe
├── services/
│   └── jewelry.service.ts → HTTP CRUD service
├── app.routes.ts          → Route definitions
├── app.config.ts          → App-level providers
└── app.ts                 → Root component
```

## API Endpoints (json-server)

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /jewelry           | Get all items       |
| GET    | /jewelry/:id       | Get item by ID      |
| POST   | /jewelry           | Add new item        |
| PUT    | /jewelry/:id       | Update item         |
| DELETE | /jewelry/:id       | Delete item         |

## Group Members

- Alexandria
- Komal
- Rahul
- Wubit

---

## Screenshots 

<img width="1543" height="965" alt="InventoryPage" src="https://github.com/user-attachments/assets/678e74fe-8d2a-422c-af49-a08bcd8d3cc0" />

<img width="1177" height="774" alt="LowStockPopUp" src="https://github.com/user-attachments/assets/e37b8f34-1e68-4677-bb97-38533ea33ffd" />

<img width="1788" height="980" alt="AddItem" src="https://github.com/user-attachments/assets/9e549938-539f-45a5-b956-549bfa14188b" />

<img width="1787" height="951" alt="EditItem" src="https://github.com/user-attachments/assets/4f6aac3b-4876-4610-a758-a669fd239ad8" />

<img width="1040" height="558" alt="Test1" src="https://github.com/user-attachments/assets/bbfd6ab0-df84-427e-b480-8a0b90d7abcc" />

<img width="1196" height="598" alt="Test2" src="https://github.com/user-attachments/assets/0d621f8d-2759-476a-ad05-a44f30b3f938" />

<img width="1248" height="764" alt="TestPass" src="https://github.com/user-attachments/assets/392d985e-10bf-427a-9ba4-7bd720b58377" />


## License

MIT

