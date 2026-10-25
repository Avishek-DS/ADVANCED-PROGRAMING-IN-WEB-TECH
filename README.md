# Uniswap API (NestJS Lab Task 2)

Uniswap is a marketplace where students sell books and project components they no longer need after a semester, and other students buy them.

## Student Details

| SL | Name | Student ID | Section |
|----|------|------------|---------|
| ?  | Your Name | Your ID | Your Section |

## Tech Stack
NestJS, TypeORM, PostgreSQL

## Entities
| Entity | Table | Fields |
|--------|-------|--------|
| Student | students | id, name, email (unique), phone, university, department, createdAt |
| Item | items | id, title, description (optional), category (Book/Component), courseCode, condition (New/Like New/Used), price, sellerId, isAvailable, createdAt |
| Order | orders | id, itemId, buyerId, meetupLocation, paymentMethod (Cash/bKash), status, createdAt |

## Setup
1. Create the database in PostgreSQL:
   ```sql
   CREATE DATABASE uniswap_db;
   ```
2. Copy `.env.example` to `.env` and set your database values.
3. Install and prepare:
   ```bash
   npm install
   npm run migration:generate   # creates the migration file from the entities
   npm run migration:run        # creates the tables in the database
   npm run start:dev            # http://localhost:5001
   ```

## Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /students | Create a student |
| GET | /students | Get all students |
| GET | /students/:id | Get one student |
| POST | /items | Create an item for sale |
| GET | /items | Get all items |
| GET | /items/:id | Get one item |
| POST | /orders | Create an order |
| GET | /orders | Get all orders |
| GET | /orders/:id | Get one order |

## Sample request bodies
Student:
```json
{ "name": "Rahim Uddin", "email": "rahim@student.edu", "phone": "01700000000", "university": "AIUB", "department": "CSE" }
```
Item:
```json
{ "title": "Introduction to Algorithms (CLRS)", "description": "3rd edition, few highlights", "category": "Book", "courseCode": "CSE203", "condition": "Used", "price": 450, "sellerId": 1 }
```
Order:
```json
{ "itemId": 1, "buyerId": 1, "meetupLocation": "Library gate", "paymentMethod": "bKash" }
```

## Validation
Required fields use `@IsNotEmpty()`. Sending an empty required field returns `400 Bad Request`.
