
# HOSTIFY - A Lounge Management WebApp

Hostify is a smart lounge management webApp that helps lounge owners efficiently handle *bookings*, *orders*, and *feedback* all in one environment.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Note for Instructor](#note-for-instructor)
- [Hostify Backend Team](#hostify-backend-team)

## Features

- Secure staff/admin authentication with JWT  
- Lounge space booking system  
- Food and drink order management  
- Customer feedback collection  
- Admin/staff reporting system  
- Input validation and centralized error handling  
- Database storage with Mongoose models  
- API testing with Postman  
- Deployment-ready backend on Render

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing
- **validation**: , express-validator for input validation
- **Testing**: Postman
- **Deployment**: Render
- **Environment Management**: dotenv

## Setup Instructions

1. Make sure you have **Node.js** installed 
 - [download from nodejs.org](https://nodejs.org/)
2. Install MongoDB if you haven't done that already, create an account and cluster
 - 
3. Clone this repository 
 - git clone https://github.com/amooraheemat/Hostify_App.git
   cd Hostify_App
4. Install the required packages by running `npm install`

## How to Run

1. Create a `.env` file in the root directory with these variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

2. Start the MongoDB server

3. Run the application:
   ```
   node app.js
   ```

4. Open your browser and go to `http://localhost:5000/api`

## Project Structure

```
/
│
├── server.js                   # Server entry point
├── package.json
├──app.js                       # Main entry point
│
├── config/
│   └── db.js                   # MongoDB connection
│
├── controllers/
│   ├── authController.js       # Authentication logic
│   ├── bookingController.js    # Bookings logic
│   ├── orderController.js      # Orders logic
│   ├── feedbackController.js   # Feedback logic
│   ├── reportController.js     # Reports aggregation
│   └── emailController.js      # Email notifications
│
├── middleware/
│   ├── authMiddleware.js       # JWT verification & role-based access
│   └── errorHandler.js         # Global error handling
│
├── models/
│   ├── User.js
│   ├── Booking.js
│   ├── Order.js
│   ├── Feedback.js
│   └── Report.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── orderRoutes.js
│   ├── feedbackRoutes.js
│   └── reportRoutes.js
│
└── utils/
    ├── generateToken.js        # JWT generator
    └── emailService.js         # Nodemailer setup

```

## How It Works

1. Staff can sign up and log in securely using JWT authentication
2. Customers can book lounge spaces with preferred date, time, and number of people expected
3. Staff can view, confirm, update, or cancel bookings
4. Customers can place and track food or drink orders
5. Feedback can be submitted and reviewed to improve service quality
6. Admins can generate daily reports summarizing bookings, orders, and feedback

## Future Improvements

- Add user profiles
- Add caching (Redis) for improved performance
- Add admin analytics dashboard
- Implement notifications for bookings and orders
- Integrate payment gateway for online transactions
- Improve the user interface

## Note for Instructor

This project is a testament to our learning journey with Node.js, Express, etc. We've implemented everything we've learnt along the way along with basic research done. And a very big thank you to our tutor, Mr. Adelabu Oluwatobi. 

## Hostify Backend Team
Hostify; Lounge Management System was developed by a team of six backend developers collaborating to deliver a production-ready web application.

Ifeoluwa Oworu 
Joshua Bello
James Nnaemeka Anthony 
Clerk Oghenekobaro
Amoo Raheemat 
Elimuyah Odinekachukwu