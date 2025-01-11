# **Seller List API**

## Overview
This is a Full-Stack Seller List API built using **Node.js** and **MongoDB**. 
The backend provides endpoints for user authentication (registration and login) and seller details. 
The API fetches seller information from the database and allows filtering based on seller names.

---

## **Features**
- User Registration and Login
- Seller operations (View, Search)
- JWT Authentication
- MongoDB as the database

---

## **Tech Stack**
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React (not included in this backend repo)
- **Authentication**: JWT Token

---

## **Prerequisites**
- **Node.js** (v18.x or later)
- **MongoDB** (Local or Cloud - Atlas)
- **Postman** or any REST Client to test APIs

---

## **Project Setup**

### **1. Clone the Repository**
git clone https://github.com/SanthoshJayavelu22/seller-list-server
cd seller-list

## **Install Dependencies**
npm install

## **Database Schema**
The database contains two collections:
User: Stores user details (name, email, password)
Seller: Stores seller details with name, rating, and review.

## **Running the Backend**
To start the backend service:
npm app.js
