# CertiTrace AI

## Project Overview

CertiTrace AI is a full-stack web application designed for essential oil producers to manage production batches, verify certificates, and maintain traceability throughout the production lifecycle. The application provides an intuitive dashboard for monitoring batches, certificates, and dispatch records while demonstrating REST API integration between the frontend and backend.

The project currently uses an Express.js backend with in-memory data storage and a React frontend. It serves as a prototype for future integration with a database, secure authentication, and AI-powered certificate verification.

---

## Features

* Responsive React frontend built with reusable components
* Dashboard displaying production batch statistics
* Batch management through REST APIs
* Search batches by batch number or plant name
* Express.js backend with CRUD operations
* Error handling middleware
* Environment variable configuration using `.env`
* Mobile-friendly responsive layout
* Clean and modern user interface

---

## Technology Stack

### Frontend

CertiTrace AI is a frontend web application designed for essential oil producers to manage production records, verify certificates, and maintain traceability across their operations. The goal of this project is to provide a simple and user-friendly interface that helps businesses organize important information in one place.
This version focuses on the frontend experience and does not include backend services, database integration, or authentication functionality.

## Design Decisions
* Clean and professional user interface
* Inter font for readability
* Green color palette to reflect sustainability and agriculture-related industries
* Responsive layout that works on desktop and mobile devices
* Simple navigation between pages

## Technology Stack
* React 19
* React Router
* Tailwind CSS
* Lucide React Icons
* Vite
<<<<<<< HEAD

### Backend

* Node.js
* Express.js
* CORS
* Dotenv
* Nodemon

---

## Project Structure

```
certitrace-ai/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── data/
│
├── README.md
└── .gitignore
```

---

## REST API Endpoints

| Method | Endpoint                      | Description             |
| ------ | ----------------------------- | ----------------------- |
| GET    | /api/batches                  | Retrieve all batches    |
| GET    | /api/batches/:id              | Retrieve a single batch |
| POST   | /api/batches                  | Create a new batch      |
| PUT    | /api/batches/:id              | Update batch details    |
| DELETE | /api/batches/:id              | Delete a batch          |
| GET    | /api/batches/search?q=keyword | Search batches          |

---

## Frontend Pages

### Home

Introduces the platform and highlights its core features.

### About

Explains the purpose, benefits, and vision of CertiTrace AI.

### Dashboard

Displays live batch information retrieved from the backend API, including production statistics and batch records.

### Login

Simple login interface for demonstration purposes. Authentication is not yet implemented.

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```text
PORT=5000
```

Run the backend server:

```bash
npm run dev
```

Server URL:

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```


## Current Status

* Week 1: Project planning and repository setup completed.
* Week 2: Responsive frontend developed.
* Week 3: UI components, responsive testing, wireframes, and theme improvements completed.
* Week 4: Express backend implemented with REST APIs and frontend successfully connected to backend services.


=======

## Project Structure
src/
├── App.js
├── App.css
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Card.jsx
│   └── Footer.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Dashboard.jsx
    └── Login.jsx

### Home Page
The landing page introduces CertiTrace AI and highlights the platform's key features through a hero section and feature cards.

### About Page
Provides information about the purpose of the platform and its core values: security, simplicity, and traceability.

### Dashboard Page
Displays sample statistics related to batches, certificates, and dispatch records.

### Login Page
Contains a simple login interface for demonstration purposes. No authentication logic has been implemented.

## Features
* Responsive navigation bar
* Hero section with call-to-action buttons
* Reusable card components
* Dashboard statistics cards
* Mobile-friendly design
* Footer available on all pages

## Current Status
The frontend application has been completed according to the Week 2 requirements. All pages are accessible through routing, components are reusable, and the layout adapts to different screen sizes.


## Setup
Setup instructions and deployment details will be added in future iterations of the project.

