# Product Management API (NestJS Lab Task 1)

## Student Details

| SL | Name | Student ID | Section |
|----|------|------------|---------|
| 34 | Avishek Saha | 23-54508-3 |E |

## Tech Stack
NestJS, TypeORM, PostgreSQL

## Database Setup
1. Install PostgreSQL and open pgAdmin (or psql).
2. Create the database:
   ```sql
   CREATE DATABASE shop_db;
   ```
3. Copy `.env.example` to `.env` and set your own database values (`DB_USER`, `DB_PASSWORD`, `DB_DATABASE`).

## Installation & Run
```bash
npm install
npm run migration:run   # creates the products and employees tables
npm run start:dev       # starts the server at http://localhost:5001
```

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get one product by ID |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get one employee by ID |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

### Sample request bodies
Product:
```json
{ "name": "Rice", "category": "Grocery", "price": 65.5, "quantity": 100 }
```
Employee:
```json
{ "name": "Rahim Uddin", "email": "rahim@example.com", "phone": "01700000000", "password": "dummy1234", "age": 28, "yearsOfWorking": 4 }
```

## Screenshots
Postman screenshots for all operations are in the `screenshots/` folder.
