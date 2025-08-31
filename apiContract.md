I'll analyze your frontend codebase to identify all the API endpoints that are being used, so you can ensure your backend has all the required functionality. Let me search through the code to find all API calls.


[8 tools called]

Based on my analysis of your frontend codebase, here's a comprehensive list of all the API endpoints your backend needs to support:

## �� **Complete API Endpoints Requirements**

### **Base URL**: `https://skillrizebackend2.onrender.com/api/v1`

---

## �� **Authentication & User Management**

### **User Registration & Login**
- `POST /user/register` - User registration
- `POST /user/login` - User login
- `POST /user/logout` - User logout

### **User Profile Management**
- `GET /user/me` - Get current user details
- `PUT /user/update` - Update user profile (with avatar upload)
- `POST /user/change-password` - Change password

### **Password Recovery**
- `POST /user/forgot-password` - Send password reset email
- `POST /user/reset/:token` - Reset password with token

---

## 📚 **Course Management**

### **Course CRUD Operations**
- `GET /course` - Get all courses
- `POST /course` - Create new course (with thumbnail upload)
- `DELETE /course/:id` - Delete course
- `GET /course/search?q=:query` - Search courses

### **Course Details**
- `GET /course/:cid` - Get specific course with lectures

---

## 🎥 **Lecture Management**

### **Lecture CRUD Operations**
- `POST /course/:courseId` - Add lecture to course (with video upload)
- `DELETE /course/:courseId/:lectureId` - Delete lecture
- `PUT /course/:courseId/:lectureId` - Edit lecture (with video upload)

---

## 💳 **Payment & Subscription (Razorpay Integration)**

### **Payment Setup**
- `GET /payments/razorpay-key` - Get Razorpay public key

### **Subscription Management**
- `POST /payments/subscribe` - Create subscription
- `POST /payments/verify` - Verify payment
- `POST /payments/unsubscribe` - Cancel subscription

### **Payment Records**
- `GET /payments?count=100` - Get payment records

---

## 📊 **Admin Dashboard & Analytics**

### **Statistics**
- `GET /admin/stats/users` - Get user statistics (all users count, subscribed users count)

---

## 📧 **Contact & Communication**

### **Contact Form**
- `POST /contact` - Submit contact form

---

## 🔧 **Backend Requirements Summary**

### **Core Features Needed:**

1. **Authentication System**
   - JWT-based authentication
   - Role-based access control (USER/ADMIN)
   - Password reset functionality
   - Session management

2. **File Upload System**
   - Image uploads (avatars, course thumbnails)
   - Video uploads (lectures)
   - File storage and serving

3. **Database Schema**
   - Users collection (with roles, profile data)
   - Courses collection (with metadata, thumbnails)
   - Lectures collection (with video files, course references)
   - Payments collection (subscription data)
   - Contact messages collection

4. **Payment Integration**
   - Razorpay API integration
   - Subscription management
   - Payment verification
   - Payment history tracking

5. **Search Functionality**
   - Course search by title/description
   - Full-text search capabilities

6. **Security Features**
   - Input validation
   - File upload security
   - CORS configuration
   - Rate limiting
   - Error handling

7. **Admin Features**
   - User management
   - Course approval/moderation
   - Analytics dashboard
   - Payment monitoring

### **Recommended Tech Stack:**
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **File Storage**: AWS S3 or similar cloud storage
- **Payment**: Razorpay integration
- **Authentication**: JWT tokens
- **File Upload**: Multer middleware
- **Validation**: Joi or express-validator
- **Email**: Nodemailer for password reset emails

### **Environment Variables Needed:**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
EMAIL_SERVICE=your_email_service_config
CLOUD_STORAGE_CONFIG=your_file_storage_config
```

This should give you a complete roadmap for building or improving your backend to support all the frontend functionality! 🚀