
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
- [Contributions (GithuB)](#contributions-github)
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
- **Security**: bcryptjs for password hashing
- **validation**: , express-validator for input validation
- **Testing**: Postman
- **Deployment**: Vercel
- **Environment Management**: dotenv

## Setup Instructions

1. Make sure you have **Node.js** installed 
 - [download from nodejs.org](https://nodejs.org/)
2. Install MongoDB if you haven't done that already, create an account and cluster
 - https://www.mongodb.com/try/download/community
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
Hostify_App/
│
├── backend/                                # Core backend source folder (API and business logic)
│   │
│   ├── Config/                             # Configuration files for database and external services
│   │   └── db.js                           # Connects to MongoDB using Mongoose
│   │
│   ├── Controllers/                        # Route handler functions (business logic)
│   │   ├── auth.controller.js              # Handles user login, registration, and admin creation
│   │   ├── booking.controller.js           # Processes room booking requests and updates
│   │   ├── feedback.controller.js          # Manages user feedback submissions
│   │   ├── order.controller.js             # Handles customer food/service order operations
│   │   ├── report.controller.js            # Manages staff daily report submissions
│   │   └── user.controller.js              # Retrieves, updates, and manages user profiles
│   │
│   ├── Middleware/                         # Express middleware functions for validation and security
│   │   ├── auth.middleware.js              # JWT authentication and admin-only route protection
│   │   ├── error.middleware.js             # Global error handler for catching exceptions
│   │   └── validator.middleware.js         # Validates incoming request data using express-validator
│   │
│   ├── Models/                             # Mongoose schemas and data models
│   │   ├── bookings.model.js               # Schema for bookings (date, user, room, status)
│   │   ├── feedback.model.js               # Schema for feedback messages from users
│   │   ├── order.model.js                  # Schema for food/service orders
│   │   ├── report.model.js                 # Schema for staff daily work reports
│   │   └── user.model.js                   # Schema for user and admin accounts
│   │
│   ├── Routes/                             # API endpoint definitions and route mappings
│   │   ├── booking.routes.js               # Defines all /api/bookings routes
│   │   ├── feedback.routes.js              # Defines all /api/feedback routes
│   │   ├── order.routes.js                 # Defines all /api/orders routes
│   │   ├── report.routes.js                # Defines all /api/reports routes
│   │   └── user.routes.js                  # Defines all /api/users routes
│   │
│   ├── Services/                           # Reusable backend services (emails, notifications, etc.)
│   │   └── email.services.js               # Handles email sending for booking confirmations
│   │
│   ├── Utils/                              # Utility/helper functions used across the backend
│   │   └── sendemail.js                    # Configures Nodemailer for sending alerts and notifications
│   │
│   ├── Validators/                         # Custom validation logic for specific features
│   │   ├── feedbackValidator.js            # Validation rules for feedback inputs
│   │   └── orderValidator.js               # Validation rules for order creation and updates
│   │
│   ├── Views/email/                        # Email templates rendered using EJS
│   │   ├── bookingCancellation.ejs         # Template for booking cancellation email
│   │   └── bookingConfirmation.ejs         # Template for booking confirmation email
│   │
│   ├── package.json                        # Project dependencies, scripts, and metadata
│   ├── server.js                           # Server entry point (starts the Express app)
│   └── vercel.json                         # Deployment configuration for Vercel hosting
│
├── .env                                    # Environment variables (DB URI, JWT secret, etc.)
├── .gitignore                              # Files and folders ignored by Git
├── package-lock.json                       # Dependency lock file for consistent installations
└── README.md                               # Project documentation and usage instructions
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
- Implement notifications for orders
- Integrate payment gateway for online transactions
- Improve the user interface

## Contributions (GithuB)

1. clone the repository git clone https://github.com/amooraheemat/Hostify_App.git
2. Create and switch to a new branch (git checkout -b branch/yourbranchname)
3. Add all files to stage (git add .[git add file1.js = Stages specific files])
3. Commit your changes (git commit -m 'add comments')
4. Push to the main branch (git push origin head)
Open a Pull Request (review and merge to main branch)

Note: Always get current updates or changes on the repository before you commit/push to avoid conflict (git pull origin main)
See video for more details: https://www.youtube.com/watch?v=Lf3DYRvCPFo

## Note for Instructor

This project is a testament to our learning journey with Node.js, Express, etc. We've implemented everything we've learnt along the way along with basic research done. And a very big thank you to our tutor, Mr. Adelabu Oluwatobi. 

## Hostify Backend Team
Hostify, A Lounge Management System was developed by a team of six backend developers collaborating to deliver a production-ready web application.

1. Ifeoluwa Oworu 
2. Joshua Bello
3. James Nnaemeka Anthony 
4. Clerk Oghenekobaro
5. Amoo Raheemat 
6. Elimuyah Odinekachukwu
