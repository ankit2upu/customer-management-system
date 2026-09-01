# Customer Management System

Customer Management System is a full-stack web application developed using React.js, Spring Boot, and MySQL. The application allows administrators to manage customer records with complete CRUD operations. It includes authentication, dashboard statistics, customer search, status filtering, responsive UI, form validation, and proper success/error notifications.

## Features
💻 Frontend: React

🗄️ Database: Railway or Aiven (MySQL)

🌐 Backend Deployment: Render

🎨 Frontend Deployment: Netlify
---
📌 Live Demo

🔗 Frontend (Netlify):
👉 https://serene-parfait-15ecd1.netlify.app/

🔗 Backend (Render API)
### Authentication
- Admin Login
- Basic form validation
- Protected routes
- Logout functionality

### Dashboard
- Total customers
- Active customers
- Pending customers
- Dynamic dashboard statistics

### Customer Management
- Add customer
- View all customers
- Update customer
- Delete customer
- Search customers
- Filter customers by status

### Customer Details
Each customer contains:
- Name
- Phone
- Email
- Address
- Status
- Date Added

### UI Features
- Responsive design
- Loading indicators
- Success notifications
- Error notifications
- Confirmation before deleting customers

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- React Toastify
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API

### Database
- MySQL

---

## Project Structure

```text
Customer-Management-System
│
├── customer-management-backend
│
├── customer-management-frontend
│
└── README.md
```

---

## API Endpoints

### Customer APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/customers | Get all customers |
| GET | /api/customers/{id} | Get customer by ID |
| POST | /api/customers | Add customer |
| PUT | /api/customers/{id} | Update customer |
| DELETE | /api/customers/{id} | Delete customer |
| GET | /api/customers/search?keyword=value | Search customer |
| GET | /api/customers/status/{status} | Filter customers by status |

### Dashboard API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/dashboard/stats | Get dashboard statistics |

---

## How to Run the Project

### Backend

1. Open the backend folder:

```bash
cd customer-management-backend
```

2. Configure MySQL database in `application.properties`.

3. Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Backend will run on:

```text
http://localhost:8080
```

---

### Frontend

1. Open the frontend folder:

```bash
cd customer-management-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## Demo Login Credentials

```text
Email: admin@gmail.com
Password: admin123
```

---

## Application Flow

```text
Login
  ↓
Dashboard
  ↓
Customer Management
  ↓
Add / Edit / Delete Customer
```

---

## Author

Ankit Kumar Gupta
