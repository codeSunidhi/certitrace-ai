# CertiTrace AI

## Project Overview
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

## Future Improvements
* Integrate a backend API
* Add user authentication and authorization
* Connect dashboard statistics to real data
* Implement dark mode
* Add animations and improved user interactions
* Introduce certificate verification workflows
## Setup
Setup instructions and deployment details will be added in future iterations of the project.
