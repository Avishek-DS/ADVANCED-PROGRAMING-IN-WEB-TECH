Avishek Saha
ID: 23-54508-3
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
=======
<<<<<<< HEAD
# Krown Dex Backend – Setup & Run Guide

````bash

This guide will help you set up and run the NestJS backend project locally.

## 🚀 Prerequisites
Before starting, ensure the following are installed:
- Node.js v22 or later
- PostgreSQL
- Redis
- npm, yarn, or pnpm (any package manager)
- Docker (optional, for containerized setup)

---

## 📦 Install Dependencies
Use any of the following commands:

```bash
pnpm install
# or
yarn install
# or
npm install


````

# 🔧 Environment Variables

Go to the project root directory
Find the file .env.example
Create a .env file in the same directory
Copy all content from .env.example into .env
Update values based on your local environment
Example:

```bash
cp .env.example .env
```

# 🗄️ Database Setup & Migrations

Create the database

```bash
create db krown_dex_db

```

Run migrations

```bash
pnpm run migration:run
# or
yarn migration:run
# or
npm run migration:run

```

# ⚡ Redis Setup

Option 1: Run Redis with Docker

```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```

Option 2: Native install- Start Redis manually, then ensure .env values match:

```bash
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

```

# ▶️ Running the Backend (Development)

Start the NestJS app:

```bash
pnpm start:dev
# or
yarn start:dev
# or
npm run start:dev

```

# 🏗️ Production Build

Create a production build:

```bash
pnpm build
# or
yarn build
# or
npm run build

```

Start the production server:

```bash
pnpm start:prod
# or
yarn start:prod
# or
npm run start:prod

```

# 📁 Project Structure (Overview)

```bash
/project-root
  ├─ src/
  │   ├─ modules/
  │   ├─ common/
  │   ├─ config/
  │   ├─ main.ts
  │   └─ app.module.ts
  ├─ migrations/
  ├─ test/
  ├─ .env.example
  ├─ package.json
  └─ tsconfig.json

```
=======
# ADVANCED-PROGRAMING-IN-WEB-TECH
>>>>>>> 0c94aecb27238b019f5c2bc7e287c190ddbb1f29
>>>>>>> 873e0bf01aa00f509301cf863db73ee5d30eae4d
