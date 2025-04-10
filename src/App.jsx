import './App.css';

import { Route, Routes } from 'react-router-dom';

import RequireAuth from './Components/Auth/RequireAuth';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import CourseDescription from './Pages/Course/CourseDescription';
import CourseList from './Pages/Course/CourseList';
import CreateCourse from './Pages/Course/CreateCourse';
import AddLecture from './Pages/Dashboard/Addlecture';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import DisplayLectures from './Pages/Dashboard/DisplayLectures';
import Denied from './Pages/Denied';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Checkout from './Pages/Payment/Checkout';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import Signup from './Pages/Signup';
import EditProfile from './Pages/User/EditProfile';
import Profile from './Pages/User/Profile';
import ChangePassword from './Pages/User/ChangePassword';
import FaqPage from './Pages/FaqPage';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import EditLecture from './Pages/Dashboard/EditLecture';
import PrivacyPolicy from './Pages/privacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import RefundPolicy from './Pages/RefundPolicy';
import Loading from './Components/Loading';
import { useEffect, useState } from 'react';



function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 seconds delay for demonstration
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>\
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/course/description" element={<CourseDescription />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/addlecture" element={<AddLecture />} />
          <Route path="/course/editlecture" element={<EditLecture />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/changepassword' element={<ChangePassword />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<DisplayLectures />}/>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App