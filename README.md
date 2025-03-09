# School Management API

A RESTful API built with Node.js, Express, and Sequelize for managing schools, including features like adding, listing, and retrieving schools by location.

## 🚀 Features
- Add a new school with validation using Zod.
- List all schools with optional sorting by distance.
- Retrieve school details by ID.
- Sequelize ORM with MySQL for database management.
- Hosted on **Render** with a free **Railway MySQL database**.

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js, Sequelize ORM
- **Database**: MySQL (Railway)
- **Validation**: Zod
- **Hosting**: Render


## 🏗 Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shahidhussain07/educase_india.git
cd school-management-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
```bash
PORT=3000
DB_URL=railway_conncection_url
```

### 4️⃣ Run the Server
```bash
npm start
```
The server will start on ```http://localhost:3000```

## 📡 API Endpoints

### 1️⃣ Get All Schools
```bash
GET /api/listSchools
```
#### Response
```bash
{
  "success": true,
  "count": 3,
  "data": [
    { "id": 1, "name": "ABC School", "address": "Delhi", "latitude": 28.6, "longitude": 77.2 }
  ]
}
```

### 2️⃣ Add a New School
```bash
POST /api/addSchool
```

#### Request Body (JSON)
```bash
{
  "name": "XYZ School",
  "address": "Mumbai",
  "latitude": 19.07,
  "longitude": 72.87
}
```

#### Response
```bash
{
  "success": true,
  "message": "School added successfully",
  "data": { "id": 2, "name": "XYZ School", "address": "Mumbai" }
}
```

### 3️⃣ Get Schools Sorted by Distance
```bash
GET /api/schools?latitude=19.07&longitude=72.87
```

## 🚀 Deployment

Deployed on Render.com with MySQL on Railway.app.



