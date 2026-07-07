# CertiTrace AI

## Project Overview

CertiTrace AI is a full-stack web application designed for essential oil producers to manage production batches, verify certificates, and maintain traceability throughout the production lifecycle.

The application enables users to create, view, update, delete, and search production batches through a responsive React dashboard connected to a Node.js and Express backend with MongoDB Atlas for persistent data storage.

---

# Features

- Responsive React frontend built with reusable components
- Production batch management dashboard
- Full CRUD operations (Create, Read, Update, Delete)
- Search batches by batch number or plant name
- RESTful API using Express.js
- MongoDB Atlas database integration
- Mongoose ODM for database operations
- Error handling middleware
- Axios integration between frontend and backend
- Environment variable configuration using `.env`
- Mobile-friendly responsive layout

---

# Technology Stack

## Frontend

- React 19
- React Router
- Tailwind CSS
- Axios
- Lucide React Icons
- Vite

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv
- Nodemon

---

# Design Decisions

- Clean and professional user interface
- Green color palette representing sustainability
- Responsive design for desktop and mobile
- RESTful backend architecture
- MongoDB chosen for flexible document-based storage
- Reusable React components for maintainability

---

# Project Structure

```
certitrace-ai/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# Database Choice

MongoDB Atlas was selected because production batch information is naturally represented as documents. The flexible schema allows easy expansion in future versions, such as adding certificate metadata, QR codes, AI verification results, and user information.

Mongoose is used as the ODM to simplify CRUD operations and schema validation.

---

# Database Schema

## Batch Collection

| Field | Type |
|---------|------|
| batchNumber | String |
| plant | String |
| harvestDate | String |
| certificate | String |
| dispatch | String |
| createdAt | Date |
| updatedAt | Date |

---

## Schema Diagram

Add your Week 5 schema diagram here.

Example:

```
docs/W5_SchemaDiagram_TBI-26100875.pdf
```

or

```markdown
![Schema Diagram](W5_SchemaDiagram_TBI-26100875.pdf)
```

---

# REST API Endpoints

| Method | Endpoint | Description |
|----------|---------------------------|----------------------------|
| GET | /api/batches | Retrieve all batches |
| GET | /api/batches/:id | Retrieve a single batch |
| POST | /api/batches | Create a batch |
| PUT | /api/batches/:id | Update a batch |
| DELETE | /api/batches/:id | Delete a batch |
| GET | /api/batches/search?q=keyword | Search batches |

---

# Frontend Pages

## Home

Introduces CertiTrace AI and its key features.

## About

Provides information about the platform and its objectives.

## Dashboard

Displays production statistics retrieved from MongoDB.

Features include:

- View batches
- Add batches
- Edit batches
- Delete batches
- Live statistics cards

## Login

Simple demonstration login page.

Authentication will be implemented in future versions.

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Environment Variables

Example `.env.example`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# Current Status

### Week 1

- Project planning
- Repository setup
- UI wireframes

### Week 2

- React frontend
- Responsive pages
- Routing

### Week 3

- UI improvements
- Reusable components
- Responsive testing

### Week 4

- Express backend
- REST APIs
- Frontend-backend integration

### Week 5

- MongoDB Atlas integration
- Mongoose models
- Persistent database
- Full CRUD operations
- Dynamic dashboard
- Axios API integration

---

# Future Improvements

- User authentication
- Role-based authorization
- AI-powered certificate verification
- QR code verification
- Certificate upload and management
- Analytics dashboard
- Export reports as PDF
- Notification system

---

# Author

**Sunidhi**

AI-Assisted Full Stack Web Development Internship
