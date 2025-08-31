# SkillRise - Learning Management System (LMS) Frontend

![SkillRise LMS](https://github.com/pappukr034/SkillRize/blob/main/Screenshot%202024-07-23%20213505.png)
![SkillRise Homepage](https://github.com/pappukr034/SkillRize/blob/main/Screenshot%202024-07-23%20213543.png)

## 📚 Overview

**SkillRise** is a modern, full-featured Learning Management System (LMS) frontend built with React and the latest web technologies. It provides a comprehensive platform for online education, course management, and user learning experiences. The application features a beautiful, responsive design with advanced functionality for both students and administrators.

## ✨ Key Features

### 🎓 **Course Management**
- **Browse Courses**: Explore a wide variety of courses with detailed descriptions
- **Course Search**: Advanced search functionality to find specific courses
- **Course Creation**: Admin-only course creation with thumbnail uploads
- **Course Categories**: Organized course categorization system
- **Course Descriptions**: Detailed course information and learning objectives

### 👤 **User Authentication & Authorization**
- **Secure Login/Logout**: JWT-based authentication system
- **User Registration**: Complete signup process with validation
- **Role-Based Access**: Different interfaces for Admin and Student users
- **Profile Management**: User profile editing and avatar uploads
- **Password Management**: Change password and forgot password functionality
- **Password Reset**: Email-based password reset system

### 💳 **Payment Integration**
- **Razorpay Integration**: Secure payment processing
- **Subscription Model**: Annual access pass for unlimited course access
- **Payment Verification**: Secure payment verification system
- **Success/Failure Handling**: Comprehensive payment status management
- **Refund Policy**: 30-day money-back guarantee

### 📊 **Admin Dashboard**
- **Analytics Dashboard**: Real-time statistics and charts
- **User Management**: View registered users and enrolled students
- **Sales Analytics**: Monthly sales tracking with Chart.js visualizations
- **Course Management**: Create, edit, and delete courses
- **Lecture Management**: Add and edit course lectures
- **Payment Records**: Track all payment transactions

### 🎥 **Content Delivery**
- **Lecture Management**: Add and organize course lectures
- **Video Content**: Support for video-based learning materials
- **Content Organization**: Structured course content delivery
- **Progress Tracking**: Monitor learning progress

### 🎨 **User Experience**
- **Responsive Design**: Mobile-first, fully responsive interface
- **Modern UI/UX**: Beautiful design with Tailwind CSS and DaisyUI
- **Loading States**: Smooth loading animations and transitions
- **Toast Notifications**: User-friendly feedback system
- **Carousel/Slider**: Interactive course and instructor showcases
- **Search Functionality**: Real-time course search capabilities

### 📱 **Additional Features**
- **FAQ Section**: Comprehensive help and support
- **Contact Form**: User support and communication
- **About Us**: Company information and mission
- **Privacy Policy**: Legal compliance and data protection
- **Terms & Conditions**: User agreement and policies
- **Refund Policy**: Clear refund terms and conditions

## 🛠️ Technology Stack

### **Frontend Technologies**
- **React 18.2.0**: Modern React with hooks and functional components
- **Redux Toolkit**: State management with RTK Query
- **React Router DOM 6.23.1**: Client-side routing
- **Vite 5.2.0**: Fast build tool and development server
- **Tailwind CSS 3.4.4**: Utility-first CSS framework
- **DaisyUI 4.12.2**: Component library for Tailwind CSS

### **UI/UX Libraries**
- **React Icons 5.2.1**: Comprehensive icon library
- **React Hot Toast 2.4.1**: Toast notification system
- **Swiper 11.1.5**: Touch slider and carousel
- **GSAP 3.12.5**: Advanced animations
- **Chart.js 4.4.3**: Data visualization charts
- **React Chart.js 2 5.2.0**: React wrapper for Chart.js

### **HTTP & API**
- **Axios 1.7.2**: HTTP client for API communication
- **Custom Axios Instance**: Configured with base URL and credentials

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
src/
├── Components/           # Reusable UI components
│   ├── Auth/            # Authentication components
│   ├── CourseCard.jsx   # Course display component
│   ├── NavBar.jsx       # Navigation component
│   ├── Footer.jsx       # Footer component
│   └── ...
├── Pages/               # Main application pages
│   ├── Course/          # Course-related pages
│   ├── Dashboard/       # Admin dashboard pages
│   ├── Payment/         # Payment processing pages
│   ├── User/            # User profile pages
│   └── ...
├── Redux/               # State management
│   ├── Slices/          # Redux Toolkit slices
│   └── store.js         # Redux store configuration
├── Layouts/             # Page layout components
├── Constants/           # Static data and constants
├── Helpers/             # Utility functions and helpers
└── Assets/              # Images and static assets
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pappukr034/LMS-frontend.git
   cd LMS-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Environment Variables

The application connects to the backend API. The base URL is configured in `src/Helpers/axiosInstance.js`:

```javascript
const BASE_URL = `https://skillrizebackend2.onrender.com/api/v1`;
```

### Backend Integration

This frontend application is designed to work with a Node.js/Express.js backend API. Ensure the backend server is running and accessible at the configured URL.

## 🎯 Key Components

### **Authentication System**
- JWT-based authentication
- Role-based access control (Admin/User)
- Secure password management
- Session persistence

### **Course Management**
- CRUD operations for courses
- File upload for course thumbnails
- Course categorization
- Search and filtering

### **Payment Processing**
- Razorpay integration
- Subscription-based model
- Payment verification
- Success/failure handling

### **Admin Dashboard**
- Real-time analytics
- User management
- Sales tracking
- Course administration

## 🎨 Design System

The application uses a modern design system with:
- **Color Scheme**: Dark theme with blue and yellow accents
- **Typography**: Clean, readable fonts
- **Components**: Reusable UI components
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first responsive design

## 🔒 Security Features

- JWT token-based authentication
- Secure password handling
- Role-based access control
- Protected routes
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Configure build settings
3. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Frontend Development**: React, Redux, Tailwind CSS
- **Backend Integration**: RESTful API communication
- **UI/UX Design**: Modern, responsive design
- **Payment Integration**: Razorpay payment gateway

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the FAQ section in the application

## 🔄 Version History

- **v1.0.0**: Initial release with core features
- **v1.1.0**: Added payment integration
- **v1.2.0**: Enhanced admin dashboard
- **v1.3.0**: Improved UI/UX and responsiveness

---

**SkillRise LMS** - Empowering education through technology! 🚀




