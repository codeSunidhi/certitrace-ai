# CertiTrace AI

## Project Overview

CertiTrace AI is a full-stack web application designed for essential oil producers to manage production batches, verify certificates, and maintain traceability throughout the production lifecycle.

The application enables users to securely register, log in, and manage production batches through a responsive React dashboard connected to a Node.js and Express backend with MongoDB Atlas for persistent data storage. JWT authentication and Google OAuth have been integrated to provide secure access to protected resources. An AI-powered batch analysis feature has also been added using the Hugging Face Inference API to provide automated quality assessment, risk identification, recommendations, and traceability insights for production batches.

---

# Features

- Responsive React frontend built with reusable components
- User Registration with bcrypt password hashing
- Secure JWT Authentication
- Google OAuth Login using Passport.js
- Protected frontend routes
- Protected backend API routes
- Production batch management dashboard
- Full CRUD operations (Create, Read, Update, Delete)
- Search batches by batch number or plant name
- RESTful API using Express.js
- MongoDB Atlas database integration
- Mongoose ODM for database operations
- Express Validator input validation
- Rate limiting for authentication endpoints
- Error handling middleware
- Axios integration between frontend and backend
- Environment variable configuration using `.env`
- Mobile-friendly responsive layout
- AI-powered batch quality analysis
- Hugging Face Inference API integration
- AI-generated quality reports and recommendations
- AI risk detection for production batches
- Secure AI API communication through backend services
- AI request loading states and error handling
- Prompt engineering and AI response optimization

---

# Technology Stack

## Frontend

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React Icons
- Vite

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- Passport.js
- Passport Google OAuth 2.0
- Express Validator
- Express Rate Limit
- Express Session
- CORS
- Dotenv
- Nodemon
- Hugging Face Inference API
- Axios for AI API communication

---

# Design Decisions

- Clean and professional user interface
- Green color palette representing sustainability
- Responsive design for desktop and mobile
- RESTful backend architecture
- MongoDB chosen for flexible document-based storage
- JWT authentication for secure API access
- Google OAuth for convenient third-party authentication
- Reusable React components for maintainability
- Hugging Face AI integration selected for flexible AI-powered batch analysis
- AI functionality implemented through backend APIs to protect API keys
- Structured prompts used to generate consistent quality reports

---

# Project Structure

```text
certitrace-ai/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ProtectedRoute.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── README.md
└── .gitignore
```

---

# Database Choice

MongoDB Atlas was selected because production batch information is naturally represented as documents. The flexible schema allows future enhancements such as certificate metadata, QR verification, AI-powered certificate validation, and user management.

Mongoose is used as the ODM to simplify CRUD operations and schema validation.

---

# Database Schema

## User Collection

| Field | Type |
|--------|------|
| email | String |
| password | String (bcrypt hashed) |
| googleId | String (OAuth users) |
| createdAt | Date |
| updatedAt | Date |

---

## Batch Collection

| Field | Type |
|--------|------|
| batchNumber | String |
| plant | String |
| harvestDate | String |
| certificate | String |
| dispatch | String |
| createdAt | Date |
| updatedAt | Date |

---

# Schema Diagram

Include your Week 5 database schema diagram here.

Example:

```
docs/W5_SchemaDiagram_InternID.pdf
```

---

# Authentication Features

- User Registration with bcrypt password hashing
- Secure Login using JWT
- Google OAuth Login
- Protected API Routes
- Protected React Routes
- Logout functionality
- JWT stored in localStorage
- Passwords never stored in plain text

---

# AI Feature (Week 7)

## AI Batch Quality Analysis

CertiTrace AI includes an AI-powered production batch analysis feature that helps essential oil producers evaluate batch quality and improve traceability.

The AI system analyzes production batch information and generates:

- Overall quality assessment
- Possible production risks
- Quality improvement recommendations
- Traceability notes

The feature uses the Hugging Face Inference API through a secure backend service.

---

## AI Workflow

User enters batch information
           ↓
React AI Analysis Interface
           ↓
POST /api/ai/analyze
           ↓
Express AI Controller
           ↓
Hugging Face Inference API
           ↓
Generated AI Analysis
           ↓
Displayed in React Dashboard

---

## AI API Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/ai/analyze | Generate AI batch quality analysis |

--- 

# Security Features

- Password hashing using bcrypt
- JWT Authentication
- Google OAuth Authentication
- Protected Routes
- Express Validator input validation
- Rate limiting on authentication endpoints
- CORS configuration
- Environment variables for secrets

---

# REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|----------------------|----------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/google | Google OAuth Login |
| GET | /api/auth/google/callback | Google OAuth Callback |

---

## Batch Management

| Method | Endpoint | Description |
|----------|------------------------------|------------------------|
| GET | /api/batches | Retrieve all batches |
| GET | /api/batches/:id | Retrieve single batch |
| POST | /api/batches | Create batch |
| PUT | /api/batches/:id | Update batch |
| DELETE | /api/batches/:id | Delete batch |
| GET | /api/batches/search?q=keyword | Search batches |

---

# Frontend Pages

## Home

Introduces CertiTrace AI and its key features.

## About

Provides information about the platform and its objectives.

## Dashboard (Protected)

Displays production statistics retrieved from MongoDB.

Features include:

- View batches
- Add batches
- Edit batches
- Delete batches
- Search batches
- Live statistics cards

## Profile (Protected)

Displays authenticated user information.

## Login

Provides:

- JWT Login
- Google OAuth Login
- Error handling
- Secure authentication

---

## AI Analysis

Provides AI-powered production batch evaluation.

Features:

- Enter batch details
- Send requests to AI backend service
- Display AI-generated analysis
- Loading state during AI processing
- Error handling for failed AI requests

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

JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

SESSION_SECRET=your_session_secret

HF_API_KEY=your_huggingface_api_key
```

Run the backend

```bash
npm run dev
```

Backend URL

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

Frontend URL

```
http://localhost:5173
```

---

# Environment Variables

Example `.env.example`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

SESSION_SECRET=your_session_secret
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

### Week 6

- User Registration using bcrypt
- JWT Authentication
- Protected Backend APIs
- Protected React Routes
- Google OAuth Login
- Express Validator
- Rate Limiting
- Logout functionality
- Session Management

### Week 7

- AI feature planning and design
- Hugging Face Inference API integration
- Backend AI service endpoint
- AI batch quality analysis
- AI prompt engineering
- React AI analysis interface
- Loading state implementation
- AI error handling
- PROMPTS.md documentation

---

# Future Improvements

- Role-based authorization
- Advanced AI certificate verification
- AI anomaly detection for suspicious batches
- AI-powered supply chain insights
- Automated compliance checking
- QR Code verification
- Certificate upload and management
- Analytics dashboard
- Email notifications
- PDF report generation
- Blockchain-based traceability

---

# AI Documentation

AI prompt experiments and evaluations are documented in: PROMPTS.md

The document contains:

- Three tested prompt variations
- Example inputs and outputs
- Best performing prompt analysis
- System role instructions

---

# Author

**Sunidhi**

AI-Assisted Full Stack Web Development Internship