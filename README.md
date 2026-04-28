# CRM Dashboard

A simple yet powerful full-stack customer management application built with React and Express.js. Manage your customers efficiently with an intuitive UI and robust API.

## 📝 Overview

This is a simple full-stack customer management application. Users can add new customers, view customer records in a table, and delete customers using a React frontend backed by an Express API. Customer data is stored in-memory on the backend, so data resets when the server restarts.

---

## ✨ Features

- ✅ **Add Customers** - Create new customer records with name, email, and phone number
- ✅ **View Customers** - Display all customers in an organized table format
- ✅ **Delete Customers** - Remove customers with a single click
- ✅ **Input Validation** - Email format and 10-digit phone number validation
- ✅ **Material UI** - Professional, responsive UI design
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Fast Performance** - In-memory data storage for quick operations

---

## 🛠 Tech Stack

### Frontend

- **React** - UI framework
- **Material-UI** - Component library
- **Axios** - HTTP client

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

---

## 📁 Project Structure

```
CRM Dashboard/
├── backend/
│   ├── server.js              # Express server & API routes
│   ├── package.json           # Backend dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # App header/navigation
│   │   │   ├── CustomerForm.jsx   # Form to add customers
│   │   │   └── CustomerTable.jsx  # Table to display customers
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # App styles
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Global styles
│   └── package.json           # Frontend dependencies
│
├── .gitignore                 # Git ignore rules
├── README.md                  # This file
└── .env                       # Root environment variables (local only)
```

---

## 📦 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/crm-dashboard.git
cd crm-dashboard
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

## 🚀 Running Locally

### Start the Backend Server

```bash
cd backend
npm start
```

The backend will run on: **http://localhost:5000**

### Start the Frontend Development Server (in a new terminal)

```bash
cd frontend
npm start
```

The frontend will run on: **http://localhost:3000**

The app will automatically open in your browser. If not, navigate to `http://localhost:3000`.

---

## 🔌 API Endpoints

### GET /customers

Returns a list of all customers.

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }
]
```

### POST /customers

Creates a new customer.

**Request Body:**

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210"
}
```

**Response:** `201 Created`

```json
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210"
}
```

### DELETE /customers/:id

Deletes a customer by ID.

**Response:** `200 OK`

```json
{
  "message": "Customer deleted successfully"
}
```

**Error Response:** `404 Not Found`

```json
{
  "error": "Customer not found"
}
```

---

## ✔️ Input Validation

The application enforces the following validation rules:

| Field     | Rule               | Example            |
| --------- | ------------------ | ------------------ |
| **Name**  | Required, any text | "John Doe"         |
| **Email** | Valid email format | "john@example.com" |
| **Phone** | Exactly 10 digits  | "1234567890"       |

---

## 🔐 Environment Variables

### Frontend (.env)

Create a `frontend/.env` file:

```env
REACT_APP_API_URL=http://localhost:5000
```

**Important:** Never commit `.env` files to version control. Add them to `.gitignore`.

---

## 🌐 Deployment

### Option 1: Deploy on Render (Backend + Frontend)

#### Backend Deployment

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables (if needed)
7. Deploy

#### Frontend Deployment

1. Click "New" → "Static Site"
2. Connect the same GitHub repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
4. Add environment variables:
   - `REACT_APP_API_URL`: Your backend URL
5. Deploy

### Option 2: Deploy Frontend on Netlify (Backend on Render)

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Add environment variable:
   - `REACT_APP_API_URL`: Your Render backend URL
7. Deploy

---

## ⚠️ Assumptions & Limitations

- **In-Memory Storage**: Customer data is stored in memory and resets when the server restarts. No persistent database is used.
- **Development Only**: This app is intended for local development and demonstration purposes, not production use.
- **No Authentication**: The API has no authentication or authorization mechanisms. Anyone with access to the API can view/modify customers.
- **CORS Enabled**: The backend allows requests from all origins (`*`). In production, restrict this to your frontend domain.
- **Single User**: The app assumes a single user and does not support multi-user scenarios.
